<template>
  <footer class="app-footer">
    <div class="footer-container">
      
      <div class="footer-col brand-col">
        <h3>VNP-WEB</h3>
        <p>{{ $t('footer.description') }}</p>
        <div class="social-links">
          <a href="https://www.facebook.com/gp.vnp.web.redaction.seo.traduction.wordpress.crea?locale=fr_FR" target="_blank" rel="noopener noreferrer" class="social-btn facebook" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7.5v4H10v9h4v-9z"/>
            </svg>
          </a>

          <a href="https://x.com/PruvostSEO" target="_blank" rel="noopener noreferrer" class="social-btn twitter" aria-label="X (Twitter)">
            <span style="font-size: 1.2rem;">𝕏</span>
          </a>

          <a href="https://www.linkedin.com/in/vnp-web-redaction-seo-wordpress-traduction/" target="_blank" rel="noopener noreferrer" class="social-btn linkedin" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/vnpweb/?hl=fr" target="_blank" rel="noopener noreferrer" class="social-btn instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>{{ $t('footer.quick_links') }}</h4>
        <nav>
          <NuxtLink :to="localePath('/')">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/services')">{{ $t('nav.services') }}</NuxtLink>
          <NuxtLink :to="localePath('/portfolio')">{{ $t('nav.portfolio') }}</NuxtLink>
          <NuxtLink :to="localePath('/blog')">{{ $t('nav.blog') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')">{{ $t('nav.contact') }}</NuxtLink>
        </nav>
      </div>

      <div class="footer-col">
        <h4>{{ $t('footer.our_services') }}</h4>
        <nav>
          <NuxtLink :to="localePath('/contact')">{{ $t('footer.services_list.web_writing') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')">{{ $t('footer.services_list.seo') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')">{{ $t('footer.services_list.wordpress') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')">{{ $t('footer.services_list.translation') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')">{{ $t('footer.services_list.site_creation') }}</NuxtLink>
        </nav>
      </div>

      <div class="footer-col">
        <h4>{{ $t('footer.contact_title') }}</h4>
        <div class="contact-info">
          <p>📧 sio.pruvost@gmail.com</p>
          <p>📞 +33 6 45 87 70 74</p>
        </div>
      </div>

    </div>
    <div class="footer-bottom">
      <p>
        &copy; 2026 VNP-WEB. {{ $t('footer.rights') }} | 
        <NuxtLink :to="localePath('/legale')" class="legal-link">{{ $t('footer.legal') }}</NuxtLink>
      </p>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
</script>

<style scoped>
.app-footer {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  background-color: #0f172a;
  color: #cbd5e1;
  padding: 60px 20px 20px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-col h3 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.footer-col h4 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.footer-col p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.footer-col nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-col nav a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-col nav a:hover {
  color: #00b4ff;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
}

.social-btn:hover {
  transform: translateY(-3px);
}

.facebook { background-color: #1877f2; }
.twitter { background-color: #000000; }
.linkedin { background-color: #0a66c2; }
.instagram { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }

.contact-info p {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #334155;
  padding-top: 20px;
  font-size: 0.9rem;
}

.legal-link {
  color: #cbd5e1;
  text-decoration: none;
  margin-left: 5px;
  transition: color 0.2s;
}

.legal-link:hover {
  color: #00b4ff;
  text-decoration: underline;
}
</style>