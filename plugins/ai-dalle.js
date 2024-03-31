import fetch from "node-fetch" 
  
var handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
 
let query = '*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱs𝗍ᥱ ᥴ᥆mᥲᥒძ᥆ gᥱᥒᥱrᥲᥣ іmᥲgᥱᥒᥱs ᥲ⍴ᥲr𝗍іr ძᥱ 𝗍ᥱ᥊𝗍᥆s 🍇*.\n\n ! ᥱȷᥱm⍴ᥣ᥆\n*.fotoai* Universo azul con estrellas verdes'
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else throw query
try {
conn.reply(m.chat, '*🚀 ᴄᴀʀɢᴀɴᴅᴏ ʀᴇsᴜʟᴛᴀᴅᴏ ッ*', fkontak, m)
await Draw(text).then((img) => {
conn.sendFile(m.chat, img, text, '*🍧 rᥱsᥙᥣ𝗍ᥲძ᥆ ძᥱ* ' + text, m)
})
} catch (e) {
throw eror
} 

}
handler.help = ['dalle']
handler.tags = ['ai']
handler.command = /^(dalle|openiamage|aiimage|aiimg|aimage|iaimagen|openaimage|openaiimage)/i
  
export default handler 
  
async function Draw(propmt) {
const Blobs = await fetch(
"https://api-inference.huggingface.co/models/prompthero/openjourney-v2",
{
method: "POST",
headers: {
"content-type": "application/json",
Authorization: "Bearer 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",
},
body: JSON.stringify({ inputs: propmt }),
})
.then((res) => res.blob())
const arrayBuffer = await Blobs.arrayBuffer()
const buffer = Buffer.from(arrayBuffer)
return buffer
}