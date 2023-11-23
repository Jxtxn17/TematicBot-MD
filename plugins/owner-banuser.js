let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙐𝙉𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼*\n\n💡 𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*⏤͟͟͞͞🍓 𝙀𝙎𝙏𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙁𝙐𝙀 𝘽𝘼𝙉𝙀𝘼𝘿𝙊 𝘾𝙊𝙉 𝙀́𝙓𝙄𝙏𝙊*\n\n*𝙔𝘼 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀 𝙐𝙎𝘼𝙍 𝙏𝙐𝙍𝘽𝙊-𝘽𝙊𝙏-𝙈𝘿*')    }
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
