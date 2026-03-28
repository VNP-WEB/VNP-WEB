import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const { id, name, email, date, time, reason, locale = 'fr' } = body

  const [hour, minute] = time.split(':')
  const endHour = String(parseInt(hour) + 1).padStart(2, '0')
  
  const formattedDate = date.replace(/-/g, '')
  const startDateTime = `${formattedDate}T${hour}${minute}00`
  const endDateTime = `${formattedDate}T${endHour}${minute}00`

  // Lien généré dynamiquement pour que le logo s'affiche en local ET en ligne
  const baseUrl = getRequestURL(event).origin
  const logoUrl = `${baseUrl}/logo.jpg`
  const cancelLink = `${baseUrl}/api/cancel?id=${id}`

  const gcalLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=RDV+Client:+${encodeURIComponent(name)}&dates=${startDateTime}/${endDateTime}&details=${encodeURIComponent('Email: ' + email + '\nMotif: ' + reason)}`

  // -- DICTIONNAIRE DES LANGUES POUR L'E-MAIL CLIENT --
  const translations = {
    fr: {
      subject: `Confirmation de votre rendez-vous - VNP-WEB`,
      greeting: `Bonjour ${name},`,
      confirmed: `Votre rendez-vous est bien confirmé pour le <strong style="color: #0047ff;">${date} à ${time}</strong>.`,
      reasonText: `<strong>Motif :</strong> ${reason}`,
      cancelInfo: `En cas d'imprévu, vous pouvez annuler ce rendez-vous à tout moment en cliquant sur le bouton ci-dessous. Le créneau sera alors libéré.`,
      cancelBtn: `Annuler mon rendez-vous`
    },
    en: {
      subject: `Appointment Confirmation - VNP-WEB`,
      greeting: `Hello ${name},`,
      confirmed: `Your appointment is confirmed for <strong style="color: #0047ff;">${date} at ${time}</strong>.`,
      reasonText: `<strong>Reason:</strong> ${reason}`,
      cancelInfo: `In case of unforeseen circumstances, you can cancel this appointment at any time by clicking the button below. The slot will then be released.`,
      cancelBtn: `Cancel my appointment`
    },
    nl: {
      subject: `Afspraakbevestiging - VNP-WEB`,
      greeting: `Hallo ${name},`,
      confirmed: `Uw afspraak is bevestigd voor <strong style="color: #0047ff;">${date} om ${time}</strong>.`,
      reasonText: `<strong>Reden:</strong> ${reason}`,
      cancelInfo: `In geval van onvoorziene omstandigheden kunt u deze afspraak op elk moment annuleren door op de onderstaande knop te klikken. Het tijdslot komt dan weer vrij.`,
      cancelBtn: `Mijn afspraak annuleren`
    }
  }

  const lang = translations[locale as keyof typeof translations] || translations['fr']

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.gmailUser,
      pass: config.gmailAppPassword
    }
  })

  try {
    // =================================================================================
    // 1. E-MAIL POUR L'ADMIN (TOI) - AVEC LOGO
    // =================================================================================
    await transporter.sendMail({
      from: `"VNP-WEB Planning" <${config.gmailUser}>`,
      to: config.contactReceiver, 
      subject: `📅 Nouveau Rendez-vous : ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          
          <div style="background-color: #ffffff; padding: 25px 20px; text-align: center; border-bottom: 1px solid #f1f5f9;">
            <img src="${logoUrl}" alt="VNP-WEB Logo" style="height: 70px; width: auto; max-width: 100%; display: block; margin: 0 auto;">
          </div>

          <div style="background: linear-gradient(135deg, #0047ff 0%, #00b4ff 100%); background-color: #0047ff; padding: 15px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">Nouveau Rendez-vous ! 🎉</h1>
          </div>
          
          <div style="padding: 35px 30px;">
            <p style="color: #334155; font-size: 16px; margin-bottom: 25px; margin-top: 0;">Un client vient de réserver un créneau sur votre site :</p>

            <div style="background-color: #f8fafc; border-left: 4px solid #0047ff; padding: 25px; border-radius: 0 12px 12px 0; margin-bottom: 35px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; width: 100px;">👤 <strong>Client</strong></td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;">📧 <strong>Email</strong></td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0047ff; text-decoration: none; font-weight: 500;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;">📅 <strong>Date</strong></td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;">⏰ <strong>Heure</strong></td>
                  <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${time}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;">🎯 <strong>Motif</strong></td>
                  <td style="padding: 8px 0; color: #0f172a;">${reason}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;">🌍 <strong>Langue</strong></td>
                  <td style="padding: 8px 0; color: #0f172a;">${locale.toUpperCase()}</td>
                </tr>
              </table>
            </div>

            <div style="text-align: center;">
              <a href="${gcalLink}" target="_blank" style="background-color: #0047ff; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 16px; display: inline-block; letter-spacing: 0.5px;">
                📅 Ajouter à mon Agenda
              </a>
            </div>
          </div>
        </div>
      `
    })

    // =================================================================================
    // 2. E-MAIL POUR LE CLIENT - AVEC LOGO
    // =================================================================================
    await transporter.sendMail({
      from: `"VNP-WEB" <${config.gmailUser}>`,
      to: email, 
      subject: lang.subject,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          
          <div style="background-color: #ffffff; padding: 30px 20px; text-align: center; border-bottom: 3px solid #0047ff;">
            <img src="${logoUrl}" alt="VNP-WEB Logo" style="height: 80px; width: auto; max-width: 100%; display: block; margin: 0 auto;">
          </div>
          
          <div style="padding: 40px 30px;">
            <h2 style="color: #0f172a; font-size: 22px; margin-top: 0; margin-bottom: 20px;">${lang.greeting}</h2>
            <p style="color: #334155; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
              ${lang.confirmed}
            </p>

            <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px 25px; border-radius: 12px; margin-bottom: 40px;">
              <p style="color: #166534; font-size: 16px; margin: 0; display: flex; align-items: center;">
                <span style="font-size: 20px; margin-right: 10px;">✨</span>
                ${lang.reasonText}
              </p>
            </div>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 0 0 30px 0;">

            <p style="color: #64748b; font-size: 14px; line-height: 1.6; text-align: center; margin-bottom: 25px; padding: 0 10px;">
              ${lang.cancelInfo}
            </p>

            <div style="text-align: center;">
              <a href="${cancelLink}" style="background-color: #fff1f2; color: #e11d48; border: 1px solid #fecdd3; padding: 14px 28px; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 14px; display: inline-block;">
                ${lang.cancelBtn}
              </a>
            </div>
            
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