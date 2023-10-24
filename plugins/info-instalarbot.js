import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
let handler  = async (m, { conn }) => {
let texto = `
╭─────────────┈⊷
│ *INSTALACIÓN DE TURBOBOT-MD*
╰┬────────────┈⊷
┌┤ *REQUISITOS PARA LAS INSTALACION*
┌┤➳ _Dudas: wa.me/51929972576
┌┤➳ _Tutoríal: https://youtu.be/qRb9ElGT8mM_
┌┤➳ _1 GB de almacenamiento_
┌┤➳ _Termux: https://www.mediafire.com/file/3hsvi3xkpq3a64o/termux_118.apk/file_
┌┤➳ _GitHub: https://github.com/Jxtxn17/TurboBot-MD_
┌┤➳ _un whatsapp inmune (secundario)_
┌┤➳ _un número victual_
┌┤➳ _2 dispositivo o una PC para escanear_
╰┬────────────┈⊷
  │ *COMANDO DE INSTALACION TERMUX*
  │> termux-setup-storage
  │> apt-get update -y && apt-get upgrade -y
  │> pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
  │> git clone https://github.com/Jxtxn17/TurboBot-MD && cd TurboBot-MD && yarn install && npm install 
  │> ls 
  │> npm start 
  ╰────────────┈⊷` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: `${texto}`.trim(), contextInfo: { externalAdReply: { title: 'Jxtxn17 ©', body: null, thumbnail: imagen2, sourceUrl: 'https://github.com/Jxtxn17/TurboBot-MD' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.tags = ['main']
handler.command = /^(instalarbot)/i
export default handler
