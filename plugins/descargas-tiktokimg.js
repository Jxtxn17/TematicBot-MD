import fetch from 'node-fetch'

var handler = async(m, { conn, text, usedPrefix, command }) => {

if (!text) throw `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 іᥒgrᥱsᥱ ᥙᥒ ᥱᥒᥣᥲᥴᥱ ძᥱ 𝗍іk𝗍᥆k, 𝗊ᥙᥱ ᥴ᥆ᥒ𝗍ᥱᥒ𝗍ᥲ іmᥲgᥱᥒᥱs*`
if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
if (!text.includes('tiktok.com')) return m.reply(`*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥙrᥣ іᥒ᥎ᥲ́ᥣіძ᥆.*`)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`)
let anu = await res.json()
if (anu.status != '200') throw Error(anu.message)
anu = anu.result
if (anu.length == 0) throw Error('Error : no data')
let c = 0
for (let x of anu) {
if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `✅ *sᥱ ᥱᥒ᥎і᥆́ 1 ძᥱ {anu.length} imágenes.* ✅\n_ᥱᥣ rᥱs𝗍᥆ sᥱrᥲ́ ᥎іsіᑲᥣᥱ ᥱᥒ ᥱᥣ ᥴһᥲ𝗍 ⍴rі᥎ᥲძ᥆ ძᥱᥣ ᑲ᥆𝗍_ 🧃` }, { quoted : m })
else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted : m })
c += 1
}
} catch (e) {
console.log(e)
throw `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱrr᥆r, іᥒ𝗍ᥱᥒ𝗍ᥱ ძᥱ ᥒᥙᥱ᥎᥆*`
}

}
handler.help = ['tiktokslide']
handler.tags = ['descargador']
handler.command = /^((tt|tiktok)imagen)$/i

export default handler