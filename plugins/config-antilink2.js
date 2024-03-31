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
await m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱᥒᥣᥲᥴᥱ ძᥱ𝗍ᥱᥴ𝗍ᥲძ᥆*\n\n*${await this.getName(m.sender)} r᥆m⍴іs𝗍ᥱ ᥣᥲs rᥱgᥣᥲs, sᥱrᥲ́s ᥱᥣіmіᥒᥲძ᥆*`)
if (!isBotAdmin) return m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥒ᥆ s᥆ᥡ ᥲძmіᥒ, ᥒ᥆ ⍴ᥙᥱძ᥆ һᥲᥴᥱrmᥱ ᥴᥲrg᥆*`)
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender],'remove')
} else if (!bot.restrict) return m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥲᥴ𝗍і᥎ᥱ ᥱᥣ m᥆ძ᥆ rᥱs𝗍rіᥴ𝗍 ⍴ᥲrᥲ ᥙsᥲr.*`)
}
return !0

}