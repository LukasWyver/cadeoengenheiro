import nodemailer from 'nodemailer'

// Função para evitar HTML injection
const escapeHtml = (text = "") =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  try {
    const { name, email, phone, subject, message } = req.body

    // Validação defensiva (backend nunca confia no frontend)
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ message: 'Campos obrigatórios ausentes' })
    }

     if (typeof phone !== "string") {
      return res.status(400).json({ error: "Telefone inválido" });
    }

    // Limpeza e normalização
    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 11) {
      return res.status(400).json({ error: "Telefone inválido" });
    }

    // Sanitização HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(cleanPhone);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // SMTP transporter (Umbler)
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: Number(process.env.MAIL_PORT) === 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    // Envio do e-mail
    await transporter.sendMail({
      from: `"${safeName}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: safeEmail,
      subject: `Contato Site | Cadê O Engenheiro?`,
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7F7F7; padding:24px; font-family:'Poppins', Arial, sans-serif;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">

                <!-- Header -->
                <tr>
                  <td style="background:#006DB7; padding:24px; text-align:center;">
                    <img
                      src="https://www.cadeoengenheiro.com.br/icons/logo.svg"
                      alt="Cadê o Engenheiro"
                      width="180"
                      style="display:block; margin:0 auto;"
                    />
                  </td>
                </tr>

                <!-- Title -->
                <tr>
                  <td style="padding:24px 24px 8px 24px;">
                    <h2 style="margin:0; color:#f4af38; font-weight:600;">
                      Novo contato recebido
                    </h2>
                    <p style="margin:8px 0 0; color:#706F6F; font-size:14px;">
                      Uma nova mensagem foi enviada através do site.
                    </p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding:0 24px;">
                    <hr style="border:none; border-top:1px solid #E3E3E3;" />
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding:16px 24px; color:#706F6F; font-size:14px; line-height:1.6;">
                    <p><strong style="color:#535151;">Nome:</strong> ${safeName}</p>
                    <p><strong style="color:#535151;">E-mail:</strong> ${safeEmail}</p>
                    <p><strong style="color:#535151;">Telefone:</strong> ${safePhone}</p>
                    <p><strong style="color:#535151;">Assunto:</strong> ${safeSubject}</p>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:0 24px 24px;">
                    <p style="margin-bottom:8px; font-weight:600; color:#535151;">
                      Mensagem:
                    </p>
                    <div style="background:#F0F0F0; padding:16px; border-radius:6px; color:#2E2D2C; font-size:14px;">
                      ${safeMessage}
                    </div>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding:0 24px;">
                    <hr style="border:none; border-top:1px solid #E3E3E3;" />
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#F7F7F7; padding:16px; text-align:center; font-size:12px; color:#706F6F;">
                    <img
                      src="https://www.cadeoengenheiro.com.br/favicon.svg"
                      width="24"
                      alt="Logo reduzido Cadê o Engenheiro?"
                      style="display:block; margin:0 auto 8px;"
                    />
                    Este e-mail foi enviado automaticamente pelo site<br/>
                    <strong style="color:#006DB7;"><a href="https://www.cadeoengenheiro.com.br/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #006DB7">Cadê o Engenheiro?</a></strong>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    })

    return res.status(200).json({ message: 'E-mail enviado com sucesso' })
  } catch (error) {
    // console.error(error)
    return res.status(500).json({ message: 'Erro ao enviar e-mail' })
  }
}
