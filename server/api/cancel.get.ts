import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  // On récupère l'ID depuis l'URL cliquée par le client
  const { id } = getQuery(event)
  
  if (!id) return 'Erreur : Identifiant manquant.'

  try {
    // Connexion à Supabase pour supprimer la ligne correspondante
    const supabase = await serverSupabaseClient(event)
    const { error } = await supabase.from('appointments').delete().eq('id', id)

    if (error) throw error

    // Ce que le client verra sur son écran après avoir cliqué sur annuler
    return `
      <html>
        <head>
          <meta charset="utf-8">
          <title>Annulation - VNP-WEB</title>
        </head>
        <body style="font-family: sans-serif; text-align: center; padding: 50px; background-color: #f8fafc;">
          <div style="background: white; max-width: 500px; margin: 0 auto; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <h1 style="color: #ff4757; margin-bottom: 20px;">Rendez-vous annulé</h1>
            <p style="color: #4b5563; font-size: 16px;">Votre rendez-vous a bien été supprimé de notre planning.</p>
            <p style="color: #4b5563; font-size: 16px;">Le créneau est de nouveau disponible.</p>
            <a href="/" style="display: inline-block; margin-top: 20px; color: #0047ff; text-decoration: none; font-weight: bold;">Retourner sur le site</a>
          </div>
        </body>
      </html>
    `
  } catch (error) {
    return 'Une erreur est survenue lors de l\'annulation.'
  }
})