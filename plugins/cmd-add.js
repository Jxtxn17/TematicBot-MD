var handler = async (m, {conn, text, usedPrefix, command}) => {

global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) return conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗]  *𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙐𝙉 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙊 𝙄𝙈𝘼𝙂𝙀𝙉*', m, fake, )
if (!m.quoted.fileSha256) return conn.reply(m.chat, ' *Solo puedes asignar comandos a stickers e imágenes*', m, fake, )
if (!text) return conn.reply(m.chat, `[❗𝐈𝐍𝐅𝐎❗]  *𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊*\n\nUso correcto:\n${usedPrefix + command} *<texto> <responder a sticker>*\n\nEjemplo:\n${usedPrefix + command} *<!menu> <responder a sticker>*`, m, fake, )
  
const sticker = global.db.data.sticker
const hash = m.quoted.fileSha256.toString('base64')

if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗]  *𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝙎𝙊𝙇𝙊 𝙋𝘼𝙍𝘼 𝙈𝙄 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊*', m, fake, )
sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false}
conn.reply(m.chat, `✅ *𝙂𝙐𝘼𝙍𝘿𝘼𝘿𝙊 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼𝙈𝙀𝙉𝙏𝙀*`, m, fake, )
}

handler.tags = ['database']
handler.help = ['setcmd']
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']

handler.rowner = true

export default handler
