<template>
  <div class="blog-page">
    
    <Transition name="fade">
      <div v-if="pending" class="page-loader">
        <div class="loader-content">
          <div class="spinner"></div>
          <p>{{ $t('blog_page.loading') }}</p>
        </div>
      </div>
    </Transition>

    <section class="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20 relative z-10">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ $t('blog_page.hero.title') }}</h1>
          <p class="text-lg md:text-xl text-blue-100">
            {{ $t('blog_page.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <section v-if="!pending && featuredPost" class="py-12 bg-gray-50">
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
                <div class="flex items-center gap-1.5 ml-1">
                  <span class="text-sm text-gray-400 mr-1">Partager :</span>
                  <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(featuredPost.link)}`" target="_blank" rel="noopener noreferrer" title="Partager sur Facebook" class="share-btn hover:bg-[#1877F2]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(featuredPost.link)}&text=${encodeURIComponent(featuredPost.title)}`" target="_blank" rel="noopener noreferrer" title="Partager sur X" class="share-btn hover:bg-black">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(featuredPost.link)}`" target="_blank" rel="noopener noreferrer" title="Partager sur LinkedIn" class="share-btn hover:bg-[#0A66C2]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <button @click="copyLink(featuredPost.link)" title="Copier le lien (Instagram)" class="share-btn hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </button>
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
              </div>
              <div class="flex items-center gap-1.5 mt-3 pt-3 border-t border-gray-100">
                <span class="text-xs text-gray-400 flex-grow">Partager</span>
                <a :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.link)}`" target="_blank" rel="noopener noreferrer" title="Facebook" class="share-btn hover:bg-[#1877F2]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(post.link)}&text=${encodeURIComponent(post.title)}`" target="_blank" rel="noopener noreferrer" title="X (Twitter)" class="share-btn hover:bg-black">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.link)}`" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="share-btn hover:bg-[#0A66C2]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <button @click="copyLink(post.link)" title="Copier le lien (Instagram)" class="share-btn hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

  <Transition name="toast">
    <div v-if="toastVisible" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-gray-900 text-white text-sm font-medium rounded-xl shadow-xl">
      Lien copié dans le presse-papiers !
    </div>
  </Transition>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
const { t, locale } = useI18n()

const toastVisible = ref(false)
let toastTimer = null

function copyLink(url) {
  navigator.clipboard.writeText(url)
  if (toastTimer) clearTimeout(toastTimer)
  toastVisible.value = true
  toastTimer = setTimeout(() => { toastVisible.value = false }, 2500)
}

// On utilise useLazyFetch : la page s'affiche instantanément, puis "pending" devient false quand l'API a répondu
const { data: articles, pending } = await useLazyFetch(() => `/api/fetch-news?lang=${locale.value}`)

const featuredPost = computed(() => articles.value?.length > 0 ? articles.value[0] : null)
const otherPosts = computed(() => articles.value?.length > 1 ? articles.value.slice(1) : [])

const blogDescription = 'Conseils, stratégies et actualités sur la création de sites web, le SEO et la rédaction de contenu par l\'équipe VNP-WEB.'

useHead({
  title: `${t('blog_page.hero.title')} - VNP-WEB`,
  meta: [
    { name: 'description', content: blogDescription },
    { property: 'og:title', content: `${t('blog_page.hero.title')} - VNP-WEB` },
    { property: 'og:description', content: blogDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://vnp-web.com/blog' },
    { property: 'og:image', content: 'https://vnp-web.com/logo.jpg' },
    { property: 'og:site_name', content: 'VNP Web' },
    { name: 'twitter:card', content: 'summary' },
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
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

/* -- LOADER LOCAL -- */
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-content {
  text-align: center;
  color: #0047ff;
  font-family: 'Dunbar Text', system-ui, sans-serif;
  font-weight: bold;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #e0f2fe;
  border-top: 5px solid #0047ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* -- SHARE BUTTONS -- */
.share-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #9ca3af;
  transition: color 0.2s, background-color 0.2s;
  flex-shrink: 0;
}
.share-btn:hover {
  color: white;
}

/* -- TOAST -- */
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(12px);
}
</style>