let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`*⚠️ 𝙃𝙀𝙔!! 𝙀𝙇 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙀𝙎𝙏𝘼 𝘼𝘾𝙏𝙄𝙑𝙊 𝙋𝙀𝙍𝙊 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉, ¡𝙎𝘼𝙇𝙑𝘼𝘿𝙊!*`)
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await m.reply(`*⚠️ 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀𝙏𝙀𝘾𝙏𝘼𝘿𝙊 ⚠️*\n\n*${await this.getName(m.sender)} 𝙈𝘼𝙉𝘿𝘼𝙎𝙏𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝙍𝙊𝙃𝙄𝘽𝙄𝘿𝙊 𝙋𝙊𝙍 𝙇𝙊 𝘾𝙐𝘼𝙇 𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊*`)
if (!isBotAdmin) return m.reply(`*⚠️ 𝙉𝙊 𝙎𝙊𝙔 𝘼𝘿𝙈𝙄𝙉, 𝙉𝙊 𝙋𝙐𝙀𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍 𝙄𝙉𝙏𝙍𝙐𝙎𝙊𝙎*`)
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`*⚠️ 𝙈𝙄 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊 𝘿𝙀𝘽𝙀 𝙏𝙀𝙉𝙀𝙍 𝙀𝙇 𝙈𝙊𝘿𝙊 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝘼𝘾𝙏𝙄𝙑𝙊*`)
}
return !0

}