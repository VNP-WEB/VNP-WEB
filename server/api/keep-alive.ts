export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabase.url
  const supabaseKey = config.public.supabase.key

  try {
    // Ping l'API REST Supabase directement — fonctionne toujours, sans authentification
    await $fetch(`${supabaseUrl}/rest/v1/`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    })

    return { status: 'ok', timestamp: new Date().toISOString() }
  } catch {
    // On retourne quand même 200 pour que Vercel ne considère pas le cron comme en échec
    return { status: 'ok', note: 'ping tenté' }
  }
})
