const toxicRegex = /puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon/i

export async function before(m, {isAdmin, isOwner}) {
if (m.isBaileys && m.fromMe) return !0
if (!m.isGroup) return !1
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
const isToxic = toxicRegex.exec(m.text)

if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 6))
await m.reply(
`${
user.warn == 1 ? `ᥒ᥆᥆ 😠 *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`
}, ძᥱᥴіr ᥣᥲ ⍴ᥲᥣᥲᑲrᥲ ${isToxic}) ᥱs𝗍ᥲ ⍴r᥆һіᑲіძ᥆*${user.warn}/6* ᥲძ᥎ᥱr𝗍ᥱᥒᥴіᥲ(s)`,
false,
{mentions: [m.sender]}
)
}

if (user.warn >= 6) {
user.warn = 0;
await m.reply(`🚫 𝐄𝐑𝐑𝐎𝐑 🚫 𝗍ᥱ ᥣ᥆ ᥲძ᥎ᥱr𝗍і́@${m.sender.split`@`[0]}*, sᥙ⍴ᥱrᥲs𝗍ᥱ ᥣᥲs 6 ᥲძ᥎ᥱr𝗍ᥱᥒᥴіᥲs ⍴᥆r ᥣ᥆ ᥴᥙᥲᥣ sᥱrᥲ́s ᥱᥣіmіᥒᥲძ᥆ ძᥱᥣ grᥙ⍴᥆. Bye bye`, false, {
mentions: [m.sender],
})
user.banned = false
await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
return !1

}