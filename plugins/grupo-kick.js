var handler = async (m, { conn, participants, usedPrefix, command }) => {

let kicktext = `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱ𝗍і𝗊ᥙᥱ𝗍ᥱ ᥆ rᥱs⍴᥆ᥒძᥲ ᥱᥣ mᥱᥒsᥲȷᥱ ᥲ ᥣᥲ ⍴ᥱrs᥆ᥒᥲ 𝗊ᥙᥱ 𝗊ᥙіᥱrᥱ ᥱᥣіmіᥒᥲr*\n\n [ 💡 ] ᥱȷᥱm⍴ᥣ᥆:\n*${usedPrefix + command} @${global.owner[0][0]}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')

}
handler.help = ['kick']
handler.tags = ['grupo']
handler.command = /^(kick|echar|hechar|sacar|ban)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler