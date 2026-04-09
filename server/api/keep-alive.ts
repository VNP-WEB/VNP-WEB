import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  // Initialiser le client Supabase côté serveur
  const supabase = await serverSupabaseClient(event)

  try {
    // On fait une toute petite requête pour simuler de l'activité
    // On demande juste 1 ID de tes rendez-vous, ça ne consomme aucune ressource
    const { data, error } = await supabase
      .from('appointments')
      .select('id')
      .limit(1)

    if (error) throw error

    return { 
      status: 'success', 
      message: 'La base de données Supabase a bien été réveillée !' 
    }
  } catch (error) {
    console.error('Erreur Keep-Alive:', error)
    throw createError({ statusCode: 500, statusMessage: 'Erreur Ping Supabase' })
  }
})