let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙐𝙉𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼*\n\n💡 𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*⏤͟͟͞͞🍓 ESTE USUARIO FUE BANEADO CON ÉXITO*\n\n* YA NO PUEDE USAR TurboBot-MD*')    }
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
