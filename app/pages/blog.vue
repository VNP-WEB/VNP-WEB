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

            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
const { t, locale } = useI18n()

// On utilise useLazyFetch : la page s'affiche instantanément, puis "pending" devient false quand l'API a répondu
const { data: articles, pending } = await useLazyFetch(() => `/api/fetch-news?lang=${locale.value}`)

const featuredPost = computed(() => articles.value?.length > 0 ? articles.value[0] : null)
const otherPosts = computed(() => articles.value?.length > 1 ? articles.value.slice(1) : [])

useHead({ title: `${t('blog_page.hero.title')} - VNP-WEB` })
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
</style>