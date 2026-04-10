<template>
  <div class="blog-page">
    
    <section class="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ $t('blog_page.hero.title') }}</h1>
          <p class="text-lg md:text-xl text-blue-100">
            {{ $t('blog_page.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <section v-if="pending" class="py-20 text-center">
      <div class="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p class="mt-4 text-gray-500">{{ $t('blog_page.loading') }}</p>
    </section>

    <section v-else-if="featuredPost" class="py-12 bg-gray-50">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="aspect-video md:aspect-auto overflow-hidden bg-gray-100">
              <img
                :src="featuredPost.image"
                :alt="featuredPost.title"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'"
              />
            </div>
            <div class="p-8 md:p-12 flex flex-col justify-center">
              <div class="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-bold rounded-full mb-6 w-fit uppercase tracking-wide">
                {{ $t('blog_page.featured') }} - {{ featuredPost.category }}
              </div>
              <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">{{ featuredPost.title }}</h2>
              <p class="text-gray-600 mb-8 text-lg">{{ featuredPost.excerpt }}</p>
              
              <div class="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  {{ featuredPost.author }}
                </div>
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  {{ featuredPost.date }}
                </div>
              </div>
              
              <div class="flex flex-wrap items-center gap-3">
                <a :href="featuredPost.link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition group">
                  {{ $t('blog_page.read_original') }}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                
                <div class="flex items-center gap-2 ml-2">
                  <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(featuredPost.link)}`" target="_blank" rel="noopener noreferrer" class="p-3 bg-gray-100 text-gray-500 hover:text-white hover:bg-[#0a66c2] rounded-xl transition-colors" :title="$t('blog_page.share') + ' LinkedIn'">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(featuredPost.link)}&text=${encodeURIComponent(featuredPost.title)}`" target="_blank" rel="noopener noreferrer" class="p-3 bg-gray-100 text-gray-500 hover:text-white hover:bg-black rounded-xl transition-colors" :title="$t('blog_page.share') + ' X'">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 3.974H5.078z"/></svg>
                  </a>
                  <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(featuredPost.link)}`" target="_blank" rel="noopener noreferrer" class="p-3 bg-gray-100 text-gray-500 hover:text-white hover:bg-[#1877f2] rounded-xl transition-colors" :title="$t('blog_page.share') + ' Facebook'">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10v9h4v-9z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="p-3 bg-gray-100 text-gray-500 hover:text-white hover:bg-[#E1306C] rounded-xl transition-colors" :title="$t('blog_page.share') + ' Instagram'">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="!pending && otherPosts.length > 0" class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <h2 class="text-3xl font-bold mb-12 text-gray-900">{{ $t('blog_page.latest') }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div v-for="post in otherPosts" :key="post.id" class="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
            <div class="aspect-[16/10] relative overflow-hidden bg-gray-100">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'"
              />
              <div class="absolute top-4 left-4">
                <span class="px-4 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-sm">
                  {{ post.category }}
                </span>
              </div>
            </div>
            
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                <a :href="post.link" target="_blank" rel="noopener noreferrer">{{ post.title }}</a>
              </h3>
              <p class="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">{{ post.excerpt }}</p>
              
              <div class="flex items-center justify-between text-xs text-gray-500 mb-6 pt-4 border-t border-gray-50">
                <div class="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  {{ post.date }}
                </div>
                <div class="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {{ post.author }}
                </div>
              </div>
              
              <div class="flex items-center gap-1 mt-auto">
                <a :href="post.link" target="_blank" rel="noopener noreferrer" class="flex-grow inline-flex items-center justify-center py-2.5 border-2 border-gray-100 text-gray-700 text-sm font-medium rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-colors group/btn">
                  {{ $t('blog_page.read_article') }}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1.5 group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                
                <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.link)}`" target="_blank" rel="noopener noreferrer" class="p-2.5 border-2 border-gray-100 text-gray-400 rounded-xl hover:border-[#0a66c2] hover:text-[#0a66c2] hover:bg-blue-50 transition-colors" :title="$t('blog_page.share') + ' LinkedIn'">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(post.link)}&text=${encodeURIComponent(post.title)}`" target="_blank" rel="noopener noreferrer" class="p-2.5 border-2 border-gray-100 text-gray-400 rounded-xl hover:border-black hover:text-black hover:bg-gray-100 transition-colors" :title="$t('blog_page.share') + ' X'">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 3.974H5.078z"/></svg>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Initialisation de i18n
const { t, locale } = useI18n()

// Récupération des articles via l'API interne en passant la langue actuelle
const { data: articles, pending } = await useFetch(() => `/api/fetch-news?lang=${locale.value}`)

// Calcul de l'article à la une
const featuredPost = computed(() => {
  return articles.value && articles.value.length > 0 ? articles.value[0] : null
})

// Calcul des autres articles de la grille
const otherPosts = computed(() => {
  return articles.value && articles.value.length > 1 ? articles.value.slice(1) : []
})

// Configuration SEO dynamique
useHead({
  title: `${t('blog_page.hero.title')} - VNP-WEB`,
  meta: [
    { name: 'description', content: t('blog_page.hero.subtitle') }
  ]
})
</script>

<style scoped>
.blog-page {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  color: #1a1a1a;
  background-color: #f9fafb;
  min-height: 100vh;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>