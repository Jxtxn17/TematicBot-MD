import fetch from 'node-fetch'

var handler = async (m, {conn, text, usedPrefix, command}) => {

if (!text) throw `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 іᥒgrᥱsᥱ ᥙᥒ 𝗍ᥱ᥊𝗍᥆ ⍴ᥲrᥲ ᥴrᥱᥲr ᥙᥒᥲ іmᥲgᥱᥒ ᥡ ᥲsі́ ᥙsᥲr Dall-E 2 🥨*\n\n❕ ᥱȷᥱm⍴ᥣ᥆\n*${usedPrefix + command}* gatitos llorando`
await conn.sendMessage(m.chat, {text: '*🚀 ᴄᴀʀɢᴀɴᴅᴏ ɪᴍᴀɢᴇɴ ッ, AGUARDE UN MOMENTO.*'}, {quoted: m})
try {
const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`)
const json1 = await tiores1.json();
await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m})
} catch {
console.log('🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱrr᥆r ᥱᥒ ᥣᥲ ᥲ⍴і ᥱᥒ ᥣᥲ ᥲ⍴і 1 ძᥱ Dall-E 2.')
try {
let tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`)
await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m})
} catch {
console.log('🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱrr᥆r ᥱᥒ ᥣᥲ ᥲ⍴і 2 Dall-E 2.');
try {
let tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`)
let json3 = await tiores3.json()
await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m})
} catch {
console.log('🚫 𝐄𝐑𝐑𝐎𝐑 🚫ᥱrr᥆r ᥱᥒ ᥣᥲ ᥲ⍴і 3 Dall-E 2.')
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m})
} catch {
console.log('🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱrr᥆r, ᥒіᥒgᥙᥒᥲ ᥲ⍴і 𝖿ᥙᥒᥴі᥆ᥒᥲ..')
throw `* ᥱrr᥆r, ᥒ᥆ sᥱ ᥆ᑲ𝗍ᥙ᥎іᥱr᥆ᥒ rᥱsᥙᥣ𝗍ᥲძ᥆s.*`
}}}}

}
handler.help = ['dall2']
handler.tags = ['ai']
handler.command = /^(dall2)/i

export default handler