var handler = async (m, {conn, usedPrefix, text, command}) => {
  
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) return conn.reply(m.chat, `[❗𝐈𝐍𝐅𝐎❗] *𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 𝘾𝙊́𝘿𝙄𝙂𝙊*\n\nUtilice !listcmd`, m, fake, )

let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗]  *¡𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝙎𝙊𝙇𝙊 𝙋𝘼𝙍𝘼 𝙈𝙄 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊*', m, fake, )
delete sticker[hash]
conn.reply(m.chat, `✅ *𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀*`, m, fake, )

}
handler.tags = ['database']
handler.help = ['delcmd']
handler.command = ['delcmd']

handler.rowner = true

export default handler
