import fetch from 'node-fetch'

var handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙄𝙈𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙌𝙐𝙀 𝘾𝙊𝙉𝙏𝙀𝙉𝙂𝘼 𝙄𝙈𝘼́𝙂𝙀𝙉𝙀𝙎*`
if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
if (!text.includes('tiktok.com')) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙐𝙍𝙇 𝙄𝙉𝙑𝘼𝙇𝙄𝘿𝙊.*`)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`)
let anu = await res.json()
if (anu.status != '200') throw Error(anu.message)
anu = anu.result
if (anu.length == 0) throw Error('Error : no data')
let c = 0
for (let x of anu) {
if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `✅ *Se ha enviado 1 de ${anu.length} imágenes.* ✅\n_El resto podrá ser visible en el chat privado del bot_ 🧃` }, { quoted : m })
else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted : m })
c += 1
}
} catch (e) {
console.log(e)
throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙍𝙍𝙊𝙍, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊*`
}

}
handler.help = ['tiktokslide']
handler.tags = ['descargador']
handler.command = /^((tt|tiktok)imagen)$/i

export default handler