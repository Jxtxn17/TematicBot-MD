var handler = async (m, {conn, text, usedPrefix, command}) => {

global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) return conn.reply(m.chat, '🚫 𝐄𝐑𝐑𝐎𝐑 🚫  *rᥱs⍴᥆ᥒძᥱ ᥲ ᥙᥒ s𝗍іᥴkᥱr ᥆ іmᥲgᥱᥒ 🍨*', m, fake, )
if (!m.quoted.fileSha256) return conn.reply(m.chat, ' *s᥆ᥣ᥆ ⍴ᥙᥱძᥱs ᥲsіgᥒᥲr ᥴ᥆mᥲᥒძ᥆s ᥲ s𝗍іᥴkᥱrs ᥱ іmᥲ́gᥱᥒᥱs*', m, fake, )
if (!text) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫  *іᥒgrᥱsᥲ ᥙᥒ 𝗍ᥱ᥊𝗍᥆*\n\nᥙs᥆ ᥴ᥆rrᥱᥴ𝗍᥆:\n${usedPrefix + command} *<texto> <responder a sticker>*\n\nEjemplo:\n${usedPrefix + command} *<!menu> <responder a sticker>*`, m, fake, )
  
const sticker = global.db.data.sticker
const hash = m.quoted.fileSha256.toString('base64')

if (sticker[hash] && sticker[hash].locked) return conn.reply(m.chat, '🚫 𝐄𝐑𝐑𝐎𝐑 🚫  *𝖿ᥙᥒᥴі᥆́ᥒ s᥆ᥣ᥆ ⍴ᥲrᥲ mі ძᥱsᥲrr᥆ᥣᥣᥲძ᥆r*', m, fake, )
sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false}
conn.reply(m.chat, `✅ *gᥙᥲrძᥲძ᥆ ᥴ᥆rrᥱᥴ𝗍ᥲmᥱᥒ𝗍ᥱ, ᥣіs𝗍᥆ ⍴ᥲrᥲ ᥙsᥲr.*`, m, fake, )
}

handler.tags = ['database']
handler.help = ['setcmd']
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']

handler.rowner = true

export default handler
