<template>
  <div class="about-page">
    
    <section class="about-hero">
      <div class="hero-container">
        <h1>{{ $t('about.title') }}</h1>
        <p>{{ $t('about.subtitle') }}</p>
      </div>
    </section>

    <section class="about-content">
      <div class="about-grid">
        
        <aside class="profile-sidebar">
          <div class="profile-card">
            <div class="avatar-wrapper">
              <img src="/logo.jpg" alt="Guillaume Pruvost" class="profile-avatar" />
            </div>
            
            <h2 class="profile-name">Guillaume Pruvost</h2>
            <p class="profile-role">{{ $t('about.role') }}</p>
            
            <div class="profile-details">
              <div class="detail-item">
                <span class="icon">📍</span>
                <span>{{ $t('about.location') }}</span>
              </div>
              <div class="detail-item">
                <span class="icon">🕒</span>
                <span>{{ $t('about.hours') }}</span>
              </div>
              <div class="detail-item">
                <span class="icon">🎓</span>
                <span>{{ $t('about.degree') }}</span>
              </div>
              <div class="detail-item">
                <span class="icon">🚀</span>
                <span>+11 {{ $t('home.stats.years') }}</span>
              </div>
            </div>

            <NuxtLink :to="localePath('/contact')" class="btn-primary">
              {{ $t('nav.contact') }}
            </NuxtLink>
          </div>
        </aside>

        <main class="text-sections">
          
          <article class="text-block">
            <h2 class="block-title">
              <span class="title-icon">👋</span> {{ $t('about.who.title') }}
            </h2>
            <p class="block-text">{{ $t('about.who.p1') }}</p>
            <p class="block-text">{{ $t('about.who.p2') }}</p>
          </article>

          <article class="text-block">
            <h2 class="block-title">
              <span class="title-icon">💻</span> {{ $t('about.what.title') }}
            </h2>
            <div class="services-list">
              <div class="service-highlight">
                <p>{{ $t('about.what.seo') }}</p>
              </div>
              <div class="service-standard">
                <p>{{ $t('about.what.support') }}</p>
              </div>
              <div class="service-standard">
                <p>{{ $t('about.what.wp') }}</p>
              </div>
              <div class="service-standard">
                <p>{{ $t('about.what.translation') }}</p>
              </div>
            </div>
          </article>

          <article class="text-block">
            <h2 class="block-title">
              <span class="title-icon">🤝</span> {{ $t('about.clients.title') }}
            </h2>
            <p class="block-text">{{ $t('about.clients.p1') }}</p>
            <p class="block-text">{{ $t('about.clients.p2') }}</p>
            <p class="block-text highlight-text">{{ $t('about.clients.p3') }}</p>
          </article>

          <article class="text-block">
            <h2 class="block-title">
              <span class="title-icon">🚀</span> {{ $t('about.why.title') }}
            </h2>
            <p class="block-text">{{ $t('about.why.p1') }}</p>
            <p class="block-text">{{ $t('about.why.p2') }}</p>
          </article>

        </main>

      </div>
    </section>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const localePath = useLocalePath()
const { t } = useI18n()

// SEO dynamique : on utilise les traductions et on a retiré le mot "freelance" !
useHead({
  title: `${t('about.title')} - VNP-WEB`,
  meta: [
    { name: 'description', content: t('about.subtitle') }
  ]
})
</script>

<style scoped>
.about-page {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  color: #1a1a1a;
  background-color: #f9fafb;
  min-height: 100vh;
  padding-bottom: 60px;
}

.about-hero {
  background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.hero-container h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.hero-container p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.about-content {
  max-width: 1200px;
  margin: -40px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 10;
}

.about-grid {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 40px;
}

/* Sidebar Responsive */
@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .profile-sidebar {
    position: static !important;
  }
}

.profile-sidebar {
  position: sticky;
  top: 100px; /* S'arrête juste en dessous du menu quand on scroll */
  height: max-content;
}

.profile-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  padding: 40px 30px;
  text-align: center;
}

.avatar-wrapper {
  width: 130px;
  height: 130px;
  margin: 0 auto 20px;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
}

.profile-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background-color: white;
  border: 4px solid white;
}

.profile-name {
  font-size: 1.5rem;
  color: #0f172a;
  margin-bottom: 5px;
}

.profile-role {
  color: #0047ff;
  font-weight: bold;
  margin-bottom: 25px;
}

.profile-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
  margin-bottom: 30px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #475569;
  font-size: 0.95rem;
}

.btn-primary {
  background: #0047ff;
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: block;
  box-sizing: border-box;
  transition: transform 0.2s, background 0.3s;
}

.btn-primary:hover {
  background: #0030cc;
  transform: translateY(-2px);
}

/* Texte à droite */
.text-sections {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.text-block {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
  padding: 40px;
}

@media (max-width: 600px) {
  .text-block {
    padding: 25px;
  }
}

.block-title {
  font-size: 1.8rem;
  color: #0f172a;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.title-icon {
  background: #e0f2fe;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

.block-text {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 15px;
  font-size: 1.05rem;
}

.highlight-text {
  font-weight: 600;
  color: #1e293b;
}

/* Blocs pour la section "Ce que je fais" */
.services-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.service-highlight {
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  padding: 20px;
  border-radius: 12px;
}

.service-highlight p {
  color: #0369a1;
  line-height: 1.6;
  margin: 0;
}

.service-standard {
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  padding: 20px;
  border-radius: 12px;
}

.service-standard p {
  color: #475569;
  line-height: 1.6;
  margin: 0;
}
</style>