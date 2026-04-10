<template>
  <div class="portfolio-page">
    
    <section class="page-hero">
      <div class="hero-container">
        <h1>{{ $t('portfolio.title') }}</h1>
        <p>{{ $t('portfolio.subtitle') }}</p>
      </div>
    </section>

    <section class="portfolio-section">
      <div class="portfolio-grid">
        
        <div class="portfolio-card">
          <div class="card-image">
            <div class="category-badge wp-badge">{{ $t('portfolio.categories.wp') }}</div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Création site WordPress" />
          </div>
          <div class="card-content">
            <h3>{{ $t('portfolio.case1.title') }}</h3>
            
            <div class="case-detail">
              <span class="icon">🎯</span>
              <div>
                <strong>{{ $t('portfolio.labels.challenge') }} :</strong>
                <p>{{ $t('portfolio.case1.challenge') }}</p>
              </div>
            </div>
            
            <div class="case-detail">
              <span class="icon">💡</span>
              <div>
                <strong>{{ $t('portfolio.labels.solution') }} :</strong>
                <p>{{ $t('portfolio.case1.solution') }}</p>
              </div>
            </div>
            
            <div class="case-detail result-box">
              <span class="icon">📈</span>
              <div>
                <strong>{{ $t('portfolio.labels.result') }} :</strong>
                <p>{{ $t('portfolio.case1.result') }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-card">
          <div class="card-image">
            <div class="category-badge seo-badge">{{ $t('portfolio.categories.seo') }}</div>
            <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80" alt="Audit et stratégie SEO" />
          </div>
          <div class="card-content">
            <h3>{{ $t('portfolio.case2.title') }}</h3>
            
            <div class="case-detail">
              <span class="icon">🎯</span>
              <div>
                <strong>{{ $t('portfolio.labels.challenge') }} :</strong>
                <p>{{ $t('portfolio.case2.challenge') }}</p>
              </div>
            </div>
            
            <div class="case-detail">
              <span class="icon">💡</span>
              <div>
                <strong>{{ $t('portfolio.labels.solution') }} :</strong>
                <p>{{ $t('portfolio.case2.solution') }}</p>
              </div>
            </div>
            
            <div class="case-detail result-box">
              <span class="icon">📈</span>
              <div>
                <strong>{{ $t('portfolio.labels.result') }} :</strong>
                <p>{{ $t('portfolio.case2.result') }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-card">
          <div class="card-image">
            <div class="category-badge writing-badge">{{ $t('portfolio.categories.writing') }}</div>
            <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80" alt="Rédaction Web SEO" />
          </div>
          <div class="card-content">
            <h3>{{ $t('portfolio.case3.title') }}</h3>
            
            <div class="case-detail">
              <span class="icon">🎯</span>
              <div>
                <strong>{{ $t('portfolio.labels.challenge') }} :</strong>
                <p>{{ $t('portfolio.case3.challenge') }}</p>
              </div>
            </div>
            
            <div class="case-detail">
              <span class="icon">💡</span>
              <div>
                <strong>{{ $t('portfolio.labels.solution') }} :</strong>
                <p>{{ $t('portfolio.case3.solution') }}</p>
              </div>
            </div>
            
            <div class="case-detail result-box">
              <span class="icon">📈</span>
              <div>
                <strong>{{ $t('portfolio.labels.result') }} :</strong>
                <p>{{ $t('portfolio.case3.result') }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="bottom-cta-section">
      <div class="cta-content">
        <h2>{{ $t('portfolio.cta.title') }}</h2>
        <p>{{ $t('portfolio.cta.subtitle') }}</p>
        <NuxtLink :to="localePath('/contact')" class="btn-primary-inverse">
          {{ $t('portfolio.cta.btn') }}
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
const localePath = useLocalePath()
useHead({
  title: 'Portfolio - VNP-WEB',
  meta: [
    { name: 'description', content: 'Découvrez les études de cas et réalisations de VNP-WEB en création de sites WordPress, SEO et rédaction web.' }
  ]
})
</script>

<style scoped>
.portfolio-page { font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif; color: #1a1a1a; background-color: #f9fafb; min-height: 100vh; }
.page-hero { background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%); color: white; padding: 80px 20px; text-align: center; }
.hero-container h1 { font-size: 3rem; margin-bottom: 15px; font-weight: bold; }
.hero-container p { font-size: 1.2rem; opacity: 0.9; max-width: 600px; margin: 0 auto; }

.portfolio-section { padding: 60px 20px 80px; max-width: 1200px; margin: 0 auto; }
.portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; }

.portfolio-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s, box-shadow 0.3s; display: flex; flex-direction: column; }
.portfolio-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,71,255,0.1); }

.card-image { height: 220px; position: relative; overflow: hidden; }
.card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.portfolio-card:hover .card-image img { transform: scale(1.05); }

.category-badge { position: absolute; top: 15px; left: 15px; padding: 6px 15px; border-radius: 20px; font-size: 0.85rem; font-weight: bold; color: white; z-index: 2; box-shadow: 0 2px 10px rgba(0,0,0,0.2); }
.wp-badge { background-color: #0047ff; }
.seo-badge { background-color: #10b981; }
.writing-badge { background-color: #f59e0b; }

.card-content { padding: 30px; flex-grow: 1; display: flex; flex-direction: column; gap: 20px; }
.card-content h3 { font-size: 1.4rem; color: #0f172a; margin: 0; line-height: 1.3; }

.case-detail { display: flex; align-items: flex-start; gap: 12px; font-size: 0.95rem; }
.case-detail .icon { font-size: 1.2rem; margin-top: 2px; }
.case-detail strong { color: #1e293b; display: block; margin-bottom: 4px; }
.case-detail p { color: #475569; margin: 0; line-height: 1.5; }

.result-box { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 15px; border-radius: 12px; margin-top: auto; }
.result-box strong { color: #166534; }
.result-box p { color: #15803d; font-weight: 500; }

.bottom-cta-section { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 80px 20px; text-align: center; color: white; }
.cta-content h2 { font-size: 2.5rem; margin-bottom: 15px; }
.cta-content p { font-size: 1.2rem; margin-bottom: 30px; color: #94a3b8; }
.btn-primary-inverse { background: #0047ff; color: white; padding: 15px 35px; border-radius: 8px; font-weight: bold; text-decoration: none; display: inline-block; transition: background 0.3s; }
.btn-primary-inverse:hover { background: #0030cc; }

@media (max-width: 768px) {
  .hero-container h1 { font-size: 2.2rem; }
  .portfolio-grid { grid-template-columns: 1fr; }
  .card-content { padding: 20px; }
}
</style>