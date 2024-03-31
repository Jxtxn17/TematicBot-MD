export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {

if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('estado') || m.text.includes('verificar') || m.text.includes('creadora') || m.text.includes('bottemporal') || m.text.includes('grupos') || m.text.includes('instalarbot') || m.text.includes('términos') || m.text.includes('bots') || m.text.includes('deletebot') || m.text.includes('eliminarsesion') || m.text.includes('serbot') || m.text.includes('verify') || m.text.includes('register') || m.text.includes('registrar') || m.text.includes('reg') || m.text.includes('reg1') || m.text.includes('nombre') || m.text.includes('name') || m.text.includes('nombre2') || m.text.includes('name2') || m.text.includes('edad') || m.text.includes('age') || m.text.includes('edad2') || m.text.includes('age2') || m.text.includes('genero') || m.text.includes('género') || m.text.includes('gender') || m.text.includes('identidad') || m.text.includes('pasatiempo') || m.text.includes('hobby') || m.text.includes('identify') || m.text.includes('finalizar') || m.text.includes('pas2') || m.text.includes('pas3') || m.text.includes('pas4') || m.text.includes('pas5') || m.text.includes('registroC') || m.text.includes('deletesesion') || m.text.includes('registroR') || m.text.includes('jadibot')) return !0
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antiPrivate && !isOwner && !isROwner) {
await m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 һ᥆ᥣᥲ @${who.replace(/@.+/, '')}, ᥒ᥆ ⍴ᥙᥱძᥱs ᥙsᥲr ᥱs𝗍ᥱ ᑲ᥆𝗍 ᥱᥒ ᥴһᥲ𝗍 ⍴rі᥎ᥲძ᥆*\n\ᥙᥒᥱ𝗍ᥱ ᥲᥣ grᥙ⍴᥆ ᥆𝖿іᥴіᥲᥣ ⍴ᥲrᥲ ⍴᥆ძᥱr ᥙsᥲr ᥱᥣ ᑲ᥆𝗍 ᥆𝖿іᥴіᥲᥣ\n${nn}`, false, { mentions: [who] })
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'banchat')
return !1
}}