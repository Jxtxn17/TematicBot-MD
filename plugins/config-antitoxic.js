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
user.warn == 1 ? `𝙉𝙊𝙊 😠 *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`
}, 𝙙𝙚𝙘𝙞𝙧 𝙡𝙖 𝙥𝙖𝙡𝙖𝙗𝙧𝙖 (${isToxic}) 𝙚𝙨𝙩𝙖 𝙥𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤 *${user.warn}/6* 𝘼𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖(s)`,
false,
{mentions: [m.sender]}
)
}

if (user.warn >= 6) {
user.warn = 0;
await m.reply(`⚠️ 𝙏𝙚 𝙡𝙤 𝙙𝙞𝙟𝙚 *@${m.sender.split`@`[0]}*, 𝙎𝙪𝙥𝙚𝙧𝙖𝙨𝙩𝙚 𝙡𝙖𝙨 6 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙡𝙤 𝙩𝙖𝙣𝙩𝙤 𝙨𝙚𝙧𝙖́𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤`, false, {
mentions: [m.sender],
})
user.banned = false
await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
return !1

}