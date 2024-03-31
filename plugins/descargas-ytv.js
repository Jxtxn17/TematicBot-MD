import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 іᥒgrᥱsᥱ ᥙᥒ ᥱᥒᥣᥲᥴᥱ ძᥱ ᥡ᥆ᥙ𝗍ᥙᑲᥱ ⍴ᥲrᥲ ძᥱsᥴᥲrgᥲr ᥱᥣ ᥎іძᥱ᥆*\n\n [ 💡 ] ᥱȷᥱm⍴ᥣ᥆\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*`, fkontak, m)
m.react(rwait)
await conn.reply(m.chat, `*🚀 ᴄᴀʀɢᴀɴᴅᴏ ᴇsᴘᴇʀᴇ.. ツ*`, m)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*📑 𝙏𝙄́𝙏𝙐𝙇𝙊*\n${ttl}\n\n*📊 𝙋𝙀𝙎𝙊*\n${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
m.react(done)
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*📑 𝗍і́𝗍ᥙᥣ᥆/𝗍і𝗍ᥣᥱ*\n${n}\n\n*📍 ⍴ᥱs᥆*\n${n3}`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
await conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱs ⍴᥆sіᑲᥣᥱ 𝗊ᥙᥱ ᥱᥣ ᥎іძᥱ᥆ sᥱᥲ mᥙᥡ ⍴ᥱsᥲძ᥆. іᥒ𝗍ᥱᥒ𝗍ᥱ ᥴ᥆ᥒ ᥆𝗍rᥲ ᥆⍴ᥴі᥆ᥒ ძᥱ ძᥱsᥴᥲrgᥲ*`, fkontak, m)
m.react(error)}
}

}
handler.help = ['ytv']
handler.tags = ['descargas']
handler.command = /^fgmp4|dlmp4|getvid|yt(v|mp4)?$/i 

export default handler