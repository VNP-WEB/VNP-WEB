import Parser from 'rss-parser'
import { translate } from 'google-translate-api-x'

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'

async function fetchOgImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
      signal: AbortSignal.timeout(4000)
    })
    const html = await res.text()
    const match = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/)
      || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/)
    return match?.[1] || null
  } catch {
    return null
  }
}

export default defineEventHandler(async (event) => {
  // 1. On récupère la langue cible demandée dans l'URL (par défaut 'fr')
  const query = getQuery(event)
  const targetLang = (query.lang as string) || 'fr'

  const parser = new Parser({
    customFields: {
      item: ['media:content', 'content:encoded'],
    }
  })

  // Sources d'actualités
  const feeds = [
    { url: 'https://www.abondance.com/feed', category: 'SEO' },
    { url: 'https://www.blogdumoderateur.com/feed', category: 'Web & Tech' }
  ]

  let allArticles = []

  // 2. Récupération des articles via RSS
  for (const feed of feeds) {
    try {
      const parsed = await parser.parseURL(feed.url)
      
      const items = await Promise.all(parsed.items.slice(0, 3).map(async item => {
        let img: string | null = null
        if (item['media:content']) {
          img = item['media:content'].$?.url || null
        } else if (item['content:encoded']) {
          const match = item['content:encoded'].match(/<img[^>]+src="([^">]+)"/)
          if (match) img = match[1]
        }

        if (!img && item.link) {
          img = await fetchOgImage(item.link)
        }

        return {
          id: item.guid || item.link,
          title: item.title || '',
          excerpt: (item.contentSnippet || '').substring(0, 140) + '...',
          link: item.link,
          author: item.creator || 'Rédaction',
          date: new Date(item.pubDate || '').toLocaleDateString(
            targetLang === 'nl' ? 'nl-NL' : targetLang === 'en' ? 'en-US' : 'fr-FR',
            { day: 'numeric', month: 'long', year: 'numeric' }
          ),
          rawDate: new Date(item.pubDate || ''),
          category: feed.category,
          image: img || FALLBACK_IMAGE
        }
      }))
      allArticles.push(...items)
    } catch (e) {
      console.error('Erreur RSS pour', feed.url)
    }
  }

  // 3. Traduction automatique si la langue n'est pas le français
  if (targetLang !== 'fr') {
    allArticles = await Promise.all(allArticles.map(async (art) => {
      try {
        // Traduction du titre
        const resTitle = await translate(art.title, { to: targetLang })
        art.title = resTitle.text

        // Traduction du résumé
        const resExcerpt = await translate(art.excerpt, { to: targetLang })
        art.excerpt = resExcerpt.text
      } catch (err) {
        console.error('Erreur traduction pour article:', art.id, err)
      }
      return art
    }))
  }

  // Tri par date
  allArticles.sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime())

  return allArticles.slice(0, 6)
})