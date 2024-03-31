import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let name = await conn.getName(m.sender)
if (chat.antiTraba && m.text.length > 5000) { //Cantidad máxima de caracteres aceptados en un mensaje//
if (isAdmin) return conn.sendMessage(m.chat, { text: `El administrador @${m.sender.split("@")[0]} acaba de enviar un texto que contiene muchos caracteres -.-!`, mentions: [m.sender] }, { quoted: fakemek })
await conn.sendMessage(m.chat, `*[ 🍓 ] ᥱᥣ mᥱᥒsᥲȷᥱ ᥴ᥆ᥒ𝗍іᥱᥒᥱ mᥙᥴһ᥆s ᥴᥲrᥲᥴ𝗍ᥱrᥱs*\n`, `${isBotAdmin ?'🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥒ᥆ s᥆ᥡ ᥲძmіᥒ, ᥒ᥆ ⍴ᥙᥱძ᥆ һᥲᥴᥱrmᥱ ᥴᥲrg᥆/'}`, m);
if (isBotAdmin && bot.restrict) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
setTimeout(() => { 
conn.sendMessage(m.chat, { text: `Marcar el chat como leido ✓\n${"\n".repeat(400)}\n=> El número : wa.me/${m.sender.split("@")[0]}\n=> Alias : ${name}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`, mentions: [m.sender] }, { quoted: fakemek })
}, 0)
setTimeout(() => { 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
} else if (!bot.restrict) return m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥲᥴ𝗍і᥎ᥱ ᥱᥣ m᥆ძ᥆ rᥱs𝗍rіᥴ𝗍 ⍴ᥲrᥲ ᥙsᥲr.*`)
}
return !0

}