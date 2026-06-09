<template>
  <div>
    <OrganismsAppHeader />

    <main>
      <slot />
    </main>

    <Newsletter />

    <OrganismsAppFooter />
    <OrganismsChatBotInterface />
  </div>
</template>

<script setup>
const route = useRoute()

useHead({
  link: computed(() => [
    { rel: 'canonical', href: `https://vnp-web.com${route.path}` }
  ])
})
</script>
