var handler = async (m, { conn, usedPrefix, command }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw '* [❗𝐈𝐍𝐅𝐎❗] 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉*'
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('❕ *_Imagen actualizada con éxito_*'))
} else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉*'

}
handler.command = /^setpp(group|grup|gc)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler