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
await conn.sendMessage(m.chat, `*[ 🍓 ] 𝙀𝙎𝙏𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙄𝙀𝙉𝙀 𝙈𝙐𝘾𝙃𝙊𝙎 𝘾𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙀𝙎️*\n`, `${isBotAdmin ?'[ 🍥 ]𝙉𝙊 𝙎𝙊𝙔 𝘼𝘿𝙈𝙄𝙉 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙃𝘼𝘾𝙀𝙍𝙈𝙀 𝘾𝘼𝙍𝙂𝙊/'}`, m);
if (isBotAdmin && bot.restrict) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
setTimeout(() => { 
conn.sendMessage(m.chat, { text: `Marcar el chat como leido ✓\n${"\n".repeat(400)}\n=> El número : wa.me/${m.sender.split("@")[0]}\n=> Alias : ${name}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en los dispositivos`, mentions: [m.sender] }, { quoted: fakemek })
}, 0)
setTimeout(() => { 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
} else if (!bot.restrict) return m.reply(`*⚠️ 𝙈𝙄 𝘿𝙀𝙎𝘼𝙍𝙍𝙊𝙇𝙇𝘼𝘿𝙊𝙍 𝘿𝙀𝘽𝙀 𝙏𝙀𝙉𝙀𝙍 𝙀𝙇 𝙈𝙊𝘿𝙊 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝘼𝘾𝙏𝙄𝙑𝙊*`)
}
return !0

}