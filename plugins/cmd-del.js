var handler = async (m, {conn, usedPrefix, text, command}) => {
  
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *іᥒgrᥱsᥲ ᥱᥣ ᥴ᥆ძіg᥆*\n\nUtilice !listcmd`, m, fake, )

let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫  *𝖿ᥙᥒᥴі᥆ᥒ s᥆ᥣ᥆ ⍴ᥲrᥲ mі ძᥱsᥲrr᥆ᥣᥣᥲძ᥆r*', m, fake, )
delete sticker[hash]
conn.reply(m.chat, '✅ *ᥱᥣіmіᥒᥲძ᥆ ᥴ᥆rrᥱᥴ𝗍ᥲmᥱᥒ𝗍ᥱ.*`, m, fake, )

}
handler.tags = ['database']
handler.help = ['delcmd']
handler.command = ['delcmd']

handler.rowner = true

export default handler
