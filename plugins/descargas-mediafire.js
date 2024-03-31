import fetch from 'node-fetch'
import { mediafiredl } from '@bochilteam/scraper'

var handler = async (m, { conn, args, usedPrefix, command, isOwner, isPrems }) => {

var limit
if((isOwner || isPrems)) limit = 1000
else limit = 600

if (!args[0]) throw `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 іᥒgrᥱsᥱ ᥙᥒ ᥱᥒᥣᥲᥴᥱ ძᥱ mᥱძіᥲ𝖿іrᥱ*\n\[ 💡 ] ᥱȷᥱm⍴ᥣ᥆\n*${usedPrefix}mediafire* https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk`
if (!args[0].match(/mediafire/gi)) throw `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥣіᥒk іᥒᥴ᥆rrᥱᥴ𝗍᥆*`
try {
m.react(rwait)
let full = /f$/i.test(command)
let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let isLimit = (isPrems || isOwner ? limit : limit) * 1012 < filesize

await conn.reply(m.chat, `💌 *ᥒ᥆mᑲrᥱ:* ${filename}\n📊 *⍴ᥱsᥱ:*  ${filesizeH}\n🗂️ *𝗍і⍴᥆:* ${ext}\n🗳️ *sᥙᑲіძ᥆:* ${aploud}`, fliveLoc, m)
    
if(!isLimit) await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
m.react(done)
} catch (e) {
m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥎ᥙᥱᥣ᥎ᥱ ᥲ іᥒ𝗍ᥱᥒ𝗍ᥲrᥣ᥆. ძᥱᑲᥱ sᥱr ᥙᥒ ᥱᥒᥣᥲᥴᥱ ᥎ᥲᥣіძ᥆ ძᥱ mᥱძіᥲ𝖿іrᥱ*`)
console.log(e)}

}
handler.help = ['mediafire']
handler.tags = ['descargas']
handler.command = ['mediafire', 'mfire']
handler.diamond = true
handler.register = true

export default handler