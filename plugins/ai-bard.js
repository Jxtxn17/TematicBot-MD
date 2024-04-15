//creditos @AzamiJs

import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *іᥒgrᥱsᥱ ᥙᥒᥲ ⍴ᥱ𝗍іᥴі᥆ᥒ 🍬*\n\nᥱȷᥱm⍴ᥣ᥆, !bard Conoces BaileyBot-MD?`, m, fake, )

try {

conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥆ᥴᥙrrі᥆ ᥙᥒ 𝖿ᥲᥣᥣ᥆ 😔*`, m, fake, )
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']

handler.premium = false

export default handler
