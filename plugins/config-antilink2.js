let linkRegex = /https:/i

export async function before(m, { isAdmin, isBotAdmin,text }) {

if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}
await m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝘼𝘿𝙊*\n\n*${await this.getName(m.sender)} 𝙍𝙊𝙈𝙋𝙄𝙎𝙏𝙀 𝙇𝘼𝙎 𝙍𝙀𝙂𝙇𝘼𝙎 𝙋𝙊𝙍 𝙇𝙊 𝘾𝙐𝘼𝙇 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊*`)
if (!isBotAdmin) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙉𝙊 𝙎𝙊𝙔 𝘼𝘿𝙈𝙄𝙉, 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎*`)
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender],'remove')
} else if (!bot.restrict) return m.reply(`*℅[❗𝐈𝐍𝐅𝐎❗] 𝙈𝙄 𝘿𝙀𝙎𝘼𝙍𝙍𝙊𝙇𝘼𝘿𝙊𝙍 𝘿𝙀𝘽𝙀 𝙏𝙀𝙉𝙀𝙍 𝙀𝙇 𝙈𝙊𝘿𝙊 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝘼𝘾𝙏𝙄𝙑𝙊*`)
}
return !0

}