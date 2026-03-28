<template>
  <div class="services-page">
    
    <section class="services-hero">
      <div class="hero-container">
        <h1>{{ $t('services.title') }}</h1>
        <p>{{ $t('services.subtitle') }}</p>
      </div>
    </section>

    <section class="main-services">
      <div class="section-header">
        <h2>{{ $t('services.mainOffers') }}</h2>
        <p>{{ $t('services.mainOffersSubtitle') }}</p>
      </div>
      
      <div class="services-grid">
        <div v-for="service in servicesList" :key="service.id" class="service-card">
          <div v-if="service.popular" class="popular-badge">
            {{ $t('services.popular') }}
          </div>

          <div class="service-image">
            <img :src="service.image" :alt="$t('serviceNames.' + service.id)" />
          </div>

          <div class="service-content">
            <h3>{{ $t('serviceNames.' + service.id) }}</h3>
            <p class="service-desc">{{ service.description }}</p>

            <ul class="features-list">
              <li v-for="(feature, idx) in service.features.slice(0, 5)" :key="idx">
                <span class="check-icon">✅</span>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <button @click="openChoiceModal(service)" class="btn-primary">
              {{ $t('services.bookConsultation') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="additional-services">
      <div class="section-header">
        <h2>{{ $t('services.additionalServices') }}</h2>
        <p>{{ $t('services.additionalServicesSubtitle') }}</p>
      </div>
      
      <div class="additional-grid">
        <div v-for="(service, index) in additionalServices" :key="index" class="additional-card">
          <div class="icon-wrapper">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="section-header">
        <h2>{{ $t('services.workProcess') }}</h2>
        <p>{{ $t('services.workProcessSubtitle') }}</p>
      </div>
      
      <div class="process-grid">
        <div v-for="(item, index) in process" :key="index" class="process-step">
          <div class="step-number">{{ item.step }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>

    <section class="bottom-cta">
      <div class="cta-content">
        <h2>{{ $t('services.question') }}</h2>
        <p>{{ $t('services.questionSubtitle') }}</p>
        <NuxtLink :to="localePath('/contact')" class="btn-white">
          {{ $t('nav.contact') }}
        </NuxtLink>
      </div>
    </section>

    <div v-if="showChoiceModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 transition-all duration-300">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md border border-blue-100 overflow-hidden p-8 text-center animate-in zoom-in duration-300 relative">
        <button @click="showChoiceModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ $t('services.modal.title') }}</h3>
        <p class="text-gray-500 mb-8 text-sm">
          {{ $t('services.modal.subtitle_part1') }} 
          <strong class="text-blue-600">{{ selectedService ? $t('serviceNames.' + selectedService.id) : '' }}</strong>
          {{ $t('services.modal.subtitle_part2') }}
        </p>

        <div class="flex flex-col gap-3">
          <NuxtLink :to="localePath({ path: '/planning', query: { service: selectedService?.id } })" class="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-left group">
            <div class="p-3 bg-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            </div>
            <div>
              <span class="block font-bold text-gray-900">{{ $t('services.modal.option1_title') }}</span>
              <span class="text-xs text-gray-500">{{ $t('services.modal.option1_desc') }}</span>
            </div>
          </NuxtLink>

          <NuxtLink :to="localePath({ path: '/contact', query: { service: selectedService?.id } })" class="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all text-left group">
            <div class="p-3 bg-gray-100 text-gray-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            </div>
            <div>
              <span class="block font-bold text-gray-900">{{ $t('services.modal.option2_title') }}</span>
              <span class="text-xs text-gray-500">{{ $t('services.modal.option2_desc') }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const localePath = useLocalePath() // Outil magique pour garder la langue dans les liens !
const showChoiceModal = ref(false)
const selectedService = ref(null)

const openChoiceModal = (service) => {
  selectedService.value = service
  showChoiceModal.value = true
}

const servicesList = [
  { id: 'redaction-web', description: 'Rédaction de contenus optimisés pour le web et le référencement', features: ['Rédaction optimisée SEO', 'Articles de blog', 'Fiches produits', 'Pages de vente', 'Recherche mots-clés'], image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80', popular: true },
  { id: 'seo', description: 'Optimisation pour les moteurs de recherche et amélioration du référencement naturel', features: ['Audit SEO complet', 'Optimisation technique', 'Mots-clés stratégiques', 'Analyse concurrence', 'Rapports mensuels'], image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80', popular: true },
  { id: 'wordpress', description: 'Création et personnalisation de sites WordPress professionnels', features: ['Installation WordPress', 'Thème sur-mesure', 'Design responsive', 'Optimisation vitesse', 'Formation incluse'], image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80', popular: true },
  { id: 'integration', description: 'Intégration web HTML/CSS/JS de vos maquettes et designs', features: ['Intégration HTML5/CSS3', 'JavaScript', '100% responsive', 'Compatible navigateurs', 'Code propre'], image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', popular: false },
  { id: 'creation-sites', description: 'Création de sites web professionnels sur-mesure', features: ['Design moderne', 'Sur-mesure', 'Optimisation SEO', 'Interface intuitive', 'Garantie satisfaction'], image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80', popular: false },
  { id: 'smo', description: 'Optimisation et gestion de vos réseaux sociaux Facebook et LinkedIn', features: ['Gestion Facebook/LinkedIn', 'Création de contenu', 'Multilingue (FR/EN/NL)', 'Planification', 'Rapports'], image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80', popular: false }
]

const additionalServices = [
  { icon: '🔍', title: 'SEO & Référencement', description: 'Améliorez votre visibilité sur les moteurs de recherche et attirez plus de trafic.' },
  { icon: '🔧', title: 'Maintenance & Support', description: 'Assurez la pérennité de votre site avec notre service de maintenance technique.' },
  { icon: '🎨', title: 'Refonte de site', description: 'Modernisez votre site existant avec un design actuel et des fonctionnalités améliorées.' },
  { icon: '⚡', title: 'Optimisation performance', description: 'Accélérez votre site pour une meilleure expérience utilisateur.' },
  { icon: '🛡️', title: 'Sécurité & SSL', description: 'Protégez votre site et vos données avec nos solutions de sécurité avancées.' }
]

const process = [
  { step: '01', title: 'Analyse', description: 'Nous étudions votre projet en détail.' },
  { step: '02', title: 'Conception', description: 'Création et validation des maquettes.' },
  { step: '03', title: 'Développement', description: 'Programmation avec les dernières technos.' },
  { step: '04', title: 'Tests', description: 'Vérification sur tous les appareils.' },
  { step: '05', title: 'Mise en ligne', description: 'Déploiement et formation.' }
]

useHead({
  title: 'Nos Services - VNP-WEB'
})
</script>

<style scoped>
.services-page { font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif; color: #1a1a1a; }
.services-hero { background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%); color: white; padding: 80px 20px; text-align: center; }
.hero-container h1 { font-size: 3rem; margin-bottom: 15px; }
.hero-container p { font-size: 1.2rem; opacity: 0.9; max-width: 600px; margin: 0 auto; }
.main-services, .additional-services, .process-section { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }
.additional-services { background-color: #f9fafb; max-width: 100%; }
.additional-grid { max-width: 1200px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 50px; }
.section-header h2 { font-size: 2.5rem; margin-bottom: 10px; }
.section-header p { color: #64748b; font-size: 1.1rem; }
.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
.service-card { background: white; border-radius: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden; position: relative; border: 2px solid transparent; transition: all 0.3s; display: flex; flex-direction: column; }
.service-card:hover { border-color: #0047ff; transform: translateY(-5px); }
.popular-badge { position: absolute; top: 15px; right: 15px; background: #0047ff; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; z-index: 2; }
.service-image { height: 200px; overflow: hidden; }
.service-image img { width: 100%; height: 100%; object-fit: cover; }
.service-content { padding: 25px; display: flex; flex-direction: column; flex-grow: 1; }
.service-content h3 { font-size: 1.5rem; margin-bottom: 10px; }
.service-desc { color: #64748b; margin-bottom: 20px; line-height: 1.5; min-height: 50px; }
.features-list { list-style: none; padding: 0; margin-bottom: 25px; flex-grow: 1; }
.features-list li { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; font-size: 0.9rem; color: #475569; }
.additional-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; }
.additional-card { background: white; padding: 25px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
.icon-wrapper { background: #e0f2fe; width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 15px; }
.process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; text-align: center; }
.step-number { background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%); color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; margin: 0 auto 15px; }
.process-step p { color: #64748b; font-size: 0.9rem; }
.bottom-cta { background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%); color: white; padding: 80px 20px; text-align: center; }
.cta-content h2 { font-size: 2.5rem; margin-bottom: 15px; }
.cta-content p { font-size: 1.2rem; opacity: 0.9; margin-bottom: 30px; }
.btn-primary { background: #0047ff; color: white; border: none; padding: 15px 25px; border-radius: 8px; font-weight: bold; cursor: pointer; width: 100%; text-align: center; text-decoration: none; display: block; box-sizing: border-box; transition: background 0.3s; margin-top: auto; }
.btn-primary:hover { background: #0030cc; }
.btn-white { background: white; color: #0047ff; padding: 15px 35px; border-radius: 8px; font-weight: bold; text-decoration: none; display: inline-block; transition: transform 0.2s; }
.btn-white:hover { transform: translateY(-2px); }

.animate-in { animation: fadeIn 0.3s ease-out; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>