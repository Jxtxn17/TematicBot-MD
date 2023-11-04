import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊*\n\n💡 𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Turbo*`
m.react(done)
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `📍 *Resultado de:* ${text}
🔎 *𝘽𝙪𝙨𝙘𝙖𝙙𝙤 𝙚𝙣:* 𝙂𝙤𝙤𝙜𝙡𝙚`, fliveLoc, m) 
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['dl']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
handler.register = true
export default handler
