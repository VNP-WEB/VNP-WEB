<template>
  <div class="home-page">
    
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-text">
          <h1>{{ $t('home.hero.title_start') }} <span class="highlight">{{ $t('home.hero.title_highlight') }}</span></h1>
          <p>{{ $t('home.hero.subtitle') }}</p>
          <div class="hero-buttons">
            <NuxtLink :to="localePath('/contact')" class="btn-primary">
              {{ $t('home.hero.btn') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/portfolio')" class="btn-secondary">
              {{ $t('home.hero.btn_portfolio') }}
            </NuxtLink>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <div class="image-placeholder">
            <img src="~/assets/images/accueil.jpeg" alt="VNP-WEB" />
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-container">
        <div class="stat-item">
          <h2 class="stat-number">+150</h2>
          <p class="stat-label">{{ $t('home.stats.projects') }}</p>
        </div>
        <div class="stat-item">
          <h2 class="stat-number">98%</h2>
          <p class="stat-label">{{ $t('home.stats.satisfaction') }}</p>
        </div>
        <div class="stat-item">
          <h2 class="stat-number">+11 {{ $t('home.stats.years') }}</h2>
          <p class="stat-label">{{ $t('home.stats.experience') }}</p>
        </div>
        <div class="stat-item">
          <h2 class="stat-number">24/7</h2>
          <p class="stat-label">{{ $t('home.stats.support') }}</p>
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="section-header">
        <h2>{{ $t('home.services.title') }}</h2>
        <p>{{ $t('home.services.subtitle') }}</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="icon-wrapper">💻</div>
          <h3>{{ $t('home.services.web_writing') }}</h3>
          <p>{{ $t('home.services.web_writing_desc') }}</p>
        </div>
        <div class="service-card">
          <div class="icon-wrapper">📈</div>
          <h3>{{ $t('home.services.seo') }}</h3>
          <p>{{ $t('home.services.seo_desc') }}</p>
        </div>
        <div class="service-card">
          <div class="icon-wrapper">📱</div>
          <h3>{{ $t('home.services.wp') }}</h3>
          <p>{{ $t('home.services.wp_desc') }}</p>
        </div>
      </div>
      <div class="text-center">
        <NuxtLink :to="localePath('/services')" class="btn-outline">{{ $t('home.services.btn') }}</NuxtLink>
      </div>
    </section>

    <section class="features-section">
      <div class="section-header">
        <h2>{{ $t('home.features.title') }}</h2>
        <p>{{ $t('home.features.subtitle') }}</p>
      </div>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon blue-circle">📅</div>
          <h3>{{ $t('home.features.booking') }}</h3>
          <p>{{ $t('home.features.booking_desc') }}</p>
          <NuxtLink :to="localePath('/planning')" class="feature-link">{{ $t('home.features.learn_more') }}</NuxtLink>
        </div>
        <div class="feature-item">
          <div class="feature-icon blue-circle">💬</div>
          <h3>{{ $t('home.features.chat') }}</h3>
          <p>{{ $t('home.features.chat_desc') }}</p>
          <button @click="isChatOpen = true" class="feature-link" style="cursor: pointer; background: transparent; border: none; font-family: inherit; font-size: inherit; padding: 0;">
            {{ $t('home.features.learn_more') }}
          </button>
        </div>
        <div class="feature-item">
          <div class="feature-icon blue-circle">🎯</div>
          <h3>{{ $t('home.features.strategy') }}</h3>
          <p>{{ $t('home.features.strategy_desc') }}</p>
          <NuxtLink :to="localePath('/services')" class="feature-link">{{ $t('home.features.learn_more') }}</NuxtLink>
        </div>
      </div>
    </section>

    <section class="why-us-section">
      <div class="section-header">
        <h2>{{ $t('home.why_us.title') }}</h2>
        <p>{{ $t('home.why_us.subtitle') }}</p>
      </div>
      <div class="why-us-grid">
        <div class="why-item">
          <div class="feature-icon blue-circle">👥</div>
          <h3>{{ $t('home.why_us.team') }}</h3>
          <p>{{ $t('home.why_us.team_desc') }}</p>
        </div>
        <div class="why-item">
          <div class="feature-icon blue-circle">🏅</div>
          <h3>{{ $t('home.why_us.quality') }}</h3>
          <p>{{ $t('home.why_us.quality_desc') }}</p>
        </div>
        <div class="why-item">
          <div class="feature-icon blue-circle">⚡</div>
          <h3>{{ $t('home.why_us.speed') }}</h3>
          <p>{{ $t('home.why_us.speed_desc') }}</p>
        </div>
      </div>
    </section>

    <section class="testimonials-section">
      <div class="section-header">
        <h2>{{ $t('home.testimonials.title') }}</h2>
        <p>{{ $t('home.testimonials.subtitle') }}</p>
      </div>
      <div class="testimonials-grid">
        
        <div class="testimonial-card">
          <div class="client-info">
            <div class="client-avatar">👨‍💼</div>
            <div>
              <h4>{{ $t('home.testimonials.t1_name') }}</h4>
              <span class="client-role">{{ $t('home.testimonials.t1_role') }}</span>
              <div class="stars">
                <svg v-for="i in 5" :key="'t1-'+i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="star-icon"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
              </div>
            </div>
          </div>
          <p class="quote">{{ $t('home.testimonials.t1_quote') }}</p>
        </div>

        <div class="testimonial-card">
          <div class="client-info">
            <div class="client-avatar">👩‍💻</div>
            <div>
              <h4>{{ $t('home.testimonials.t2_name') }}</h4>
              <span class="client-role">{{ $t('home.testimonials.t2_role') }}</span>
              <div class="stars">
                <svg v-for="i in 5" :key="'t2-'+i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="star-icon"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
              </div>
            </div>
          </div>
          <p class="quote">{{ $t('home.testimonials.t2_quote') }}</p>
        </div>

        <div class="testimonial-card">
          <div class="client-info">
            <div class="client-avatar">🏃‍♂️</div>
            <div>
              <h4>{{ $t('home.testimonials.t3_name') }}</h4>
              <span class="client-role">{{ $t('home.testimonials.t3_role') }}</span>
              <div class="stars">
                <svg v-for="i in 5" :key="'t3-'+i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="star-icon"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
              </div>
            </div>
          </div>
          <p class="quote">{{ $t('home.testimonials.t3_quote') }}</p>
        </div>

        <div class="testimonial-card">
          <div class="client-info">
            <div class="client-avatar">👩‍⚕️</div>
            <div>
              <h4>{{ $t('home.testimonials.t4_name') }}</h4>
              <span class="client-role">{{ $t('home.testimonials.t4_role') }}</span>
              <div class="stars">
                <svg v-for="i in 4" :key="'t4-'+i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="star-icon"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="star-icon empty-star"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
              </div>
            </div>
          </div>
          <p class="quote">{{ $t('home.testimonials.t4_quote') }}</p>
        </div>

        <div class="testimonial-card">
          <div class="client-info">
            <div class="client-avatar">👨‍💻</div>
            <div>
              <h4>{{ $t('home.testimonials.t5_name') }}</h4>
              <span class="client-role">{{ $t('home.testimonials.t5_role') }}</span>
              <div class="stars">
                <svg v-for="i in 5" :key="'t5-'+i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="star-icon"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>
              </div>
            </div>
          </div>
          <p class="quote">{{ $t('home.testimonials.t5_quote') }}</p>
        </div>
      </div>
    </section>

    <section class="bottom-cta-section">
      <div class="cta-content">
        <h2>{{ $t('home.cta.title') }}</h2>
        <p>{{ $t('home.cta.subtitle') }}</p>
        <NuxtLink :to="localePath('/contact')" class="btn-primary-inverse">{{ $t('home.cta.btn') }}</NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
const localePath = useLocalePath()

// Ajout de l'état global du chat pour pouvoir l'ouvrir via le bouton
const isChatOpen = useState('isChatOpen', () => false)

// Optimisation SEO
useHead({
  title: 'VNP-WEB | Création de site web, Rédaction & SEO',
  meta: [
    { 
      name: 'description', 
      content: 'VNP-WEB crée des sites web performants (WordPress & sur-mesure) et optimise votre référencement naturel (SEO/GEO) pour faire décoller votre activité.' 
    }
  ]
})
</script>

<style scoped>
.home-page {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  color: #1a1a1a;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}
.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}
.section-header p {
  font-size: 1.1rem;
  color: #666;
}
.text-center { text-align: center; }

/* -- HERO SECTION -- */
.hero-section {
  background: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
  background-size: 40px 40px, 40px 40px, 100% 100%;
  padding: 80px 20px;
  color: white;
}
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;
}
.hero-text { flex: 1; }
.hero-text h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 20px;
}
.highlight { color: #00ffff; }
.hero-text p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
}
.hero-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

/* Boutons */
.btn-primary {
  background-color: white;
  color: #0047ff;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.btn-primary:hover { transform: translateY(-2px); }

.btn-primary-inverse {
  background-color: white;
  color: #0047ff;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
  text-decoration: none;
  display: inline-block;
}
.btn-primary-inverse:hover { transform: translateY(-2px); }

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s, color 0.2s;
}
.btn-secondary:hover { 
  background-color: white; 
  color: #0047ff; 
}

.hero-image-wrapper { flex: 1; width: 100%; }
.image-placeholder {
  width: 100%;
  height: 350px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}
.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

/* -- STATS SECTION -- */
.stats-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.stats-container {
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  gap: 20px;
}
.stat-item {
  flex: 1;
  min-width: 150px;
}
.stat-number {
  font-size: 3rem;
  color: #0047ff;
  margin: 0 0 10px 0;
}
.stat-label {
  color: #666;
  font-weight: 500;
  margin: 0;
}

/* -- SERVICES, FEATURES, WHY US, TESTIMONIALS -- */
.services-section, .testimonials-section {
  padding: 80px 20px;
  background-color: #fafafa;
}
.features-section, .why-us-section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.services-grid, .features-grid, .why-us-grid, .testimonials-grid {
  max-width: 1200px;
  margin: 0 auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
  gap: 30px;
}
.features-grid, .why-us-grid {
  text-align: center;
}

.service-card, .testimonial-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.service-card:hover { transform: translateY(-5px); }
.icon-wrapper {
  background: #f0f4ff;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #0047ff;
}
.btn-outline {
  background: transparent;
  border: 1px solid #ddd;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-block;
  text-decoration: none;
  color: inherit;
}
.btn-outline:hover {
  border-color: #0047ff;
  color: #0047ff;
}

.blue-circle {
  background-color: #0047ff;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 20px;
}
.feature-item p, .why-item p { color: #666; }
.feature-link {
  color: #666;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-top: 15px;
  border: 1px solid #eee;
  padding: 8px 15px;
  border-radius: 20px;
}

.client-info {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}
.client-avatar {
  font-size: 2.5rem;
  background: #f0f0f0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.client-info h4 { margin: 0; color: #0f172a;}
.client-role { color: #888; font-size: 0.85rem; display: block; margin-top: 2px;}

/* Étoiles SVG */
.stars {
  display: flex;
  gap: 2px;
  margin-top: 4px;
}
.star-icon {
  width: 16px;
  height: 16px;
  color: #fbbf24;
}
.empty-star {
  color: #e2e8f0;
}

.quote { font-style: italic; color: #555; line-height: 1.6; }

.bottom-cta-section {
  background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%);
  padding: 80px 20px;
  text-align: center;
  color: white;
}
.cta-content h2 { font-size: 2.5rem; margin-bottom: 15px; }
.cta-content p { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; }

/* MEDIA QUERIES */
@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
  .hero-text h1 {
    font-size: 2.8rem;
  }
  .hero-buttons {
    justify-content: center;
  }
  .image-placeholder {
    height: 300px;
  }
  .stats-container {
    gap: 30px;
  }
  .stat-item {
    width: 40%; 
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 50px 20px;
  }
  .hero-text h1 {
    font-size: 2.2rem;
  }
  .hero-text p {
    font-size: 1.1rem;
  }
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  .btn-primary, .btn-secondary {
    width: 100%; 
  }
  .image-placeholder {
    height: 220px;
  }
  .section-header h2 {
    font-size: 2rem;
  }
  .stat-item {
    width: 100%; 
  }
  .services-grid, .features-grid, .why-us-grid, .testimonials-grid {
    grid-template-columns: 1fr; 
  }
  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>