export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  
  // LA LIGNE MAGIQUE : Empêche le serveur de crasher et délègue l'affichage au navigateur
  ssr: false, 

  css: ['~/assets/css/main.css'],

  // 1. AJOUT DU MODULE SUPABASE ICI :
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],

  // 2. CONFIGURATION SUPABASE : Pour éviter qu'il bloque les visiteurs non connectés
  supabase: {
    redirect: false
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    // On pointe bien vers ton dossier à la racine
    langDir: '../i18n/locales/', 
    locales: [
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: '🇫🇷 FR' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: '🇬🇧 EN' },
      { code: 'nl', iso: 'nl-NL', file: 'nl.json', name: '🇧🇪 NL' }
    ],
    // LE NOUVEAU BLOC MAGIQUE POUR LA SAUVEGARDE DE LA LANGUE ET L'ACCESSIBILITÉ
    // Désactivé pour forcer l'attribut lang="" correct sur la balise <html>
    detectBrowserLanguage: false
  },

  // Configuration pour l'envoi de mails (Nodemailer et Brevo)
  runtimeConfig: {
    // Ces variables ne sont accessibles que côté serveur (dans /server/api)
    gmailUser: process.env.GMAIL_USER,
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
    contactReceiver: process.env.CONTACT_RECEIVER,
    
    // NOUVELLES VARIABLES BREVO
    brevoApiKey: process.env.BREVO_API_KEY,
    brevoListId: process.env.BREVO_LIST_ID
  },

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit']
    }
  }
})