/creditos a AzamiJS

import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()

conn.sendPresenceUpdate('composing', m.chat)

let media = await (uploader)(buffer)
let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()

conn.sendMessage(m.chat, { text: json.result }, { quoted: m })

} else return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝙈𝘼𝙉𝘿𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙔 𝙀𝙇 𝙏𝙀𝙓𝙏𝙊 𝘼𝘽𝙐𝙎𝘾𝘼𝙍 *\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊, !bardimg dame información de left 4 dead 2`, m, fake, )

}
handler.help = ['bardimg']
handler.tags = ['ai']
handler.command = /^(bardimg|bardimage)$/i

handler.limit = true

export default handler
