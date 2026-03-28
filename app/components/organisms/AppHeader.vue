<template>
  <header class="app-header">
    <div class="header-container">
      
      <NuxtLink :to="localePath('/')" class="logo-link" @click="closeMenu">
        <img src="/logo.jpg" alt="VNP-WEB Logo" class="logo-img" />
      </NuxtLink>

      <button class="burger-btn" @click="toggleMenu" aria-label="Menu principal">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div :class="['nav-wrapper', { 'is-open': isMenuOpen }]">
        
        <nav class="main-nav">
          <NuxtLink :to="localePath('/')" exact-active-class="active" @click="closeMenu">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/services')" exact-active-class="active" @click="closeMenu">{{ $t('nav.services') }}</NuxtLink>
          <NuxtLink :to="localePath('/portfolio')" exact-active-class="active" @click="closeMenu">{{ $t('nav.portfolio') }}</NuxtLink>
          <NuxtLink :to="localePath('/blog')" exact-active-class="active" @click="closeMenu">{{ $t('nav.blog') }}</NuxtLink>
          <NuxtLink :to="localePath('/planning')" exact-active-class="active" @click="closeMenu">{{ $t('nav.planning') }}</NuxtLink>
          <NuxtLink :to="localePath('/about')" exact-active-class="active" @click="closeMenu">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" exact-active-class="active" @click="closeMenu">{{ $t('nav.contact') }}</NuxtLink>
        </nav>

        <div class="header-actions">
          
          <div class="language-selector">
            <span class="globe-icon">🌐</span>
            <select :value="locale" @change="handleLanguageChange($event)">
              <option v-for="l in locales" :key="l.code" :value="l.code">
                {{ l.name }}
              </option>
            </select>
          </div>

          <NuxtLink :to="localePath('/contact')" class="btn-quote" @click="closeMenu">
            {{ $t('nav.quote') }}
          </NuxtLink>
        </div>

      </div>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

// État pour gérer l'ouverture/fermeture du menu sur mobile
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Fonction pour fermer le menu quand on clique sur un lien
const closeMenu = () => {
  isMenuOpen.value = false
}

// Fonction pour gérer le changement de langue et fermer le menu sur mobile
const handleLanguageChange = (event) => {
  setLocale(event.target.value)
  closeMenu()
}
</script>

<style scoped>
.app-header {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo-link {
  z-index: 101; /* Pour que le logo reste toujours cliquable par-dessus le menu */
}

.logo-img {
  height: 50px;
  object-fit: contain;
}

/* Bouton Burger caché sur les grands écrans */
.burger-btn {
  display: none;
  background: none;
  border: none;
  color: #0f172a;
  cursor: pointer;
  z-index: 101;
  padding: 5px;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  gap: 30px;
}

.main-nav {
  display: flex;
  gap: 30px;
}

.main-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.main-nav a:hover, .main-nav a.active {
  color: #0052D4;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f8fafc;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.globe-icon {
  font-size: 1.1rem;
}

.language-selector select {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  background: transparent;
  border: none;
  outline: none;
  font-weight: 500;
  color: #333;
  cursor: pointer;
}

.btn-quote {
  font-family: 'Dunbar Text', system-ui, -apple-system, sans-serif;
  background-color: #0f172a;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn-quote:hover {
  background-color: #334155;
}

/* =========================================================
   MEDIA QUERIES (POUR TABLETTES ET MOBILES)
   ========================================================= */
@media (max-width: 992px) {
  .burger-btn {
    display: block; /* On affiche le bouton burger */
  }

  .nav-wrapper {
    position: absolute;
    top: 100%; /* S'ouvre juste en dessous du header */
    left: 0;
    right: 0;
    background-color: #ffffff;
    flex-direction: column;
    padding: 30px 20px;
    box-shadow: 0 10px 15px rgba(0,0,0,0.05);
    border-top: 1px solid #f1f5f9;
    gap: 30px;
    
    /* Animation fluide d'ouverture/fermeture */
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 0.3s ease-in-out;
  }

  /* État quand le menu est ouvert */
  .nav-wrapper.is-open {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .main-nav {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .main-nav a {
    font-size: 1.1rem;
    padding: 5px 0;
    width: 100%;
    text-align: center;
  }

  .header-actions {
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }

  .language-selector {
    width: 100%;
    justify-content: center;
  }

  .btn-quote {
    width: 100%;
  }
}
</style>