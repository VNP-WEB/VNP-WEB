import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  // On récupère l'ID en plus des autres infos
  const { id, name, email, date, time, reason } = body

  // 1. Création du lien magique Google Agenda (Durée : 1 heure)
  const [hour, minute] = time.split(':')
  const endHour = String(parseInt(hour) + 1).padStart(2, '0')
  
  const formattedDate = date.replace(/-/g, '')
  const startDateTime = `${formattedDate}T${hour}${minute}00`
  const endDateTime = `${formattedDate}T${endHour}${minute}00`

  const gcalLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=RDV+Client:+${encodeURIComponent(name)}&dates=${startDateTime}/${endDateTime}&details=${encodeURIComponent('Email: ' + email + '\nMotif: ' + reason)}`

  // 2. Création du lien d'annulation unique pour le client
  const cancelLink = `${getRequestURL(event).origin}/api/cancel?id=${id}`

  // 3. Configuration Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.gmailUser,
      pass: config.gmailAppPassword
    }
  })

  // 4. Envoi des deux e-mails
  try {
    // A. L'e-mail pour TOI (Administrateur)
    await transporter.sendMail({
      from: `"VNP-WEB Planning" <${config.gmailUser}>`,
      to: config.contactReceiver, 
      subject: `📅 Nouveau Rendez-vous : ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0047ff;">Nouveau rendez-vous !</h2>
          <p>Un client vient de réserver un créneau sur ton site :</p>
          <ul style="background: #f8fafc; padding: 15px 30px; border-radius: 8px;">
            <li><strong>Client :</strong> ${name}</li>
            <li><strong>Email :</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Date :</strong> ${date}</li>
            <li><strong>Heure :</strong> ${time}</li>
            <li><strong>Motif :</strong> ${reason}</li>
          </ul>
          <br>
          <div style="text-align: center; margin-top: 20px;">
            <a href="${gcalLink}" target="_blank" style="background-color: #0047ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
              📅 Ajouter à mon Google Agenda
            </a>
          </div>
        </div>
      `
    })

    // B. L'e-mail pour LE CLIENT (Confirmation + Annulation)
    await transporter.sendMail({
      from: `"VNP-WEB" <${config.gmailUser}>`,
      to: email, 
      subject: `Confirmation de votre rendez-vous - VNP-WEB`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0047ff;">Bonjour ${name},</h2>
          <p>Votre rendez-vous est bien confirmé pour le <strong>${date} à ${time}</strong>.</p>
          <p>Motif de la consultation : <em>${reason}</em></p>
          <br>
          <p style="color: #64748b; font-size: 14px;">En cas d'imprévu, vous pouvez annuler ce rendez-vous à tout moment en cliquant sur le bouton ci-dessous. Le créneau sera alors libéré.</p>
          <div style="text-align: center; margin-top: 20px;">
            <a href="${cancelLink}" style="background-color: #ff4757; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
              ❌ Annuler mon rendez-vous
            </a>
          </div>
        </div>
      `
    })

    return { status: 'success' }
  } catch (error) {
    console.error('Erreur Nodemailer Booking:', error)
    throw createError({ statusCode: 500, statusMessage: 'Erreur envoi mail de réservation' })
  }
})