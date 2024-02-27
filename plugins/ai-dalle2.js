import fetch from 'node-fetch'

var handler = async (m, {conn, text, usedPrefix, command}) => {

if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘿 𝘾𝙍𝙀𝘼𝙍 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙔 𝘼𝙎𝙄 𝙐𝙎𝙎𝙍 𝙇𝙎 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝙀 𝘿𝘼𝙇𝙇𝙀-𝙀 2*\n\n❕ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command}* gatitos llorando`
await conn.sendMessage(m.chat, {text: '*❗ REALIZANDO IMAGEN, AGUARDE UN MOMENTO.*'}, {quoted: m})
try {
const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`)
const json1 = await tiores1.json();
await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m})
} catch {
console.log('[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙍𝙍𝙊𝙍 𝙀𝙉 𝙇𝘼 𝘼𝙋𝙄 𝙉𝙐𝙈𝙀𝙍𝙊 1 𝘿𝙀 𝘿𝘼𝙇𝙇-𝙀 2.')
try {
let tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`)
await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m})
} catch {
console.log('[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙍𝙍𝙊𝙍 𝙀𝙉 𝙇𝘼 𝘼𝙋𝙄 𝙉𝙐́𝙈𝙀𝙍𝙊 2 𝘿𝙀 𝘿𝘼𝙇𝙇-E 2.');
try {
let tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`)
let json3 = await tiores3.json()
await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m})
} catch {
console.log('[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙍𝙍𝙊𝙍 𝙀𝙉 𝙇𝘼 𝘼𝙋𝙄 𝙉𝙐𝙈𝙀𝙍𝙊 3 𝘿𝘼𝙇𝙇-𝙀 2.')
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m})
} catch {
console.log('[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙍𝙍𝙊𝙏, 𝙉𝙄𝙉𝙂𝙐𝙉𝘼 𝘼𝙋𝙄 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝘼.')
throw `* 𝙀𝙍𝙍𝙊𝙍, 𝙉𝙊 𝙎𝙀 𝙊𝘽𝙏𝙐𝙑𝙄𝙀𝙍𝙊𝙉 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎.*`
}}}}

}
handler.help = ['dall2']
handler.tags = ['ai']
handler.command = /^(dall2)/i

export default handler