import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let bot = `*🚀 𝙃𝙤𝙡𝙖 𝙨𝙤𝙮 𝙏𝙪𝙧𝙗𝙤*\n𝙀𝙣 𝙦𝙪𝙚 𝙩𝙚 𝙥𝙪𝙚𝙙𝙤 𝙖𝙮𝙪𝙙𝙖𝙧?`
let vn = [imagen1, imagen2, imagen3, imagen4, img1].getRandom()
let chat = global.db.data.chats[m.chat]
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendFile(m.chat, vn, 'bot.jpg', bot, m, true, { type: 'conversation', ptt: true, sendEphemeral: true, quoted: estilo })}
return !0
}
export default handler
