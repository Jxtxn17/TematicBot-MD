import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊*\n\n❕ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Minecraft*`
m.react(rwait)
const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
📍 *Resultado de:* ${text}
🔎 *𝘽𝙪𝙨𝙘𝙖𝙙𝙤 𝙚𝙣:* 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩`.trim(), fliveLoc, m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['dl']
handler.command = /^(pinterest)$/i

export default handler
