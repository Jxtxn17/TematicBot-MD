import fg from 'api-dylux'
import { tiktokdl } from '@bochilteam/scraper'

var handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) return conn.reply(m.chat, `[❗𝐈𝐍𝐅𝐎❗] *𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆*\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊, !${command} https://vm.tiktok.com/ZMYG92bUh/`, m, fake, )
if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, `🚩 *[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙉𝙇𝘼𝘾𝙀 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊*`, m, fake, )

m.react(rwait)

const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitt}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waittt}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitttt}`, edit: key})

try {
let p = await fg.tiktok(args[0])
let te = `*Nombre:* ${p.nickname}
*Usuario:* ${p.unique_id}
*Duración:* ${p.duration}
*Descripción:* ${p.description}`
conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
m.react(done)
} catch {

try {

const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd

m.react(error)
if (!url) return conn.reply(m.chat, `[❗𝐈𝐍𝐅𝐎❗] *Ocurrió un fallo*`, m, fake, )
conn.sendFile(m.chat, url, 'fb.mp4', `*Nombre:* ${nickname}\n*Descripción:* ${description}`, m)
m.react(done)
} catch {
m.react(error)
conn.reply(m.chat, `[❗𝐈𝐍𝐅𝐎❗] *Ocurrió un fallo*`, m, fake, )
}}

}
handler.help = ['tiktok']
handler.tags = ['descargas']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i

handler.limit = true
handler.register = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))