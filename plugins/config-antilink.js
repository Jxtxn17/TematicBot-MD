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
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 һᥱᥡ!! ᥱᥣ ᥲᥒ𝗍іᥣіᥒk ᥱs𝗍ᥲ ᥱᥒᥴᥱᥒძіძ᥆ ⍴ᥱr᥆ ᥱrᥱs ᥲძmіᥒ.. 𝗍ᥱ sᥲᥣ᥎ᥲs𝗍ᥱ.*`)
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱᥒᥣᥲᥴᥱ ძᥱ𝗍ᥱᥴ𝗍ᥲძ᥆*\n\n*${await this.getName(m.sender)} mᥲᥒძᥲs𝗍ᥱ ᥙᥒ ᥣіᥒk?, sᥱrᥲ́s ᥱᥣіmіᥒᥲძ᥆*`)
if (!isBotAdmin) return m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥒ᥆ s᥆ᥡ ᥲძmіᥒ, ᥒ᥆ ⍴ᥙᥱძ᥆ һᥲᥴᥱrmᥱ ᥴᥲrg᥆*`)
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥲᥴ𝗍і᥎ᥱ ᥱᥣ m᥆ძ᥆ rᥱs𝗍rіᥴ𝗍 ⍴ᥲrᥲ ⍴᥆ძᥱr ᥙsᥲr.*`)
}
return !0

}