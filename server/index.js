const express = require('express');
const nodemalier = require('nodemailer');
const cors = require('cors')
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/contacto', async(req, res) => {
    const { usermame, email, phone, info } = req.body;
    try{
        let transporter = nodemalier.createTransport({
            service: 'gmail',
            auth: {
                user: 'posse1512@gmail.com',
                pass: 'mezt wvye usvu xhoo'
            }
        })

        let mailOptions = {
            from: email,
            to: 'alejavargas21.av@gmail.com',
            subject: 'New message',
        text: `Nombre ${usermame}\nCorreo ${email}\nTelefono ${phone}\nMensaje ${info}`
        }

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
    }catch(error) {
        console.error('Error al enviar correo:', error);
        res.status(500).json({ success: false, message: 'Error al enviar el correo' });
      }
});

app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});