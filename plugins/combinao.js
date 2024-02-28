import fetch from 'node-fetch'

var handler = async (m, {command, conn}) => {

if (command == 'chambear1') {
let china = await fetch(`https://aemt.me/china`)
conn.sendMessage(m.chat, {image: china, caption: `🇨🇳 *China*`.trim()}, {quoted: m})
}

if (command == 'chambear2') {
let vietnamita = await fetch(`https://aemt.me/vietnam`)
conn.sendMessage(m.chat, {image: vietnamita, caption: `🇻🇳 *Vietnamita*`.trim()}, {quoted: m})
}

if (command == 'chambear3') {
let tailandes = await fetch(`https://aemt.me/thailand`)
conn.sendMessage(m.chat, {image: tailandes, caption: `🇹🇭 *Tailandes*`.trim()}, {quoted: m})
}

if (command == 'chambear4') {
let indonesia = await fetch(`https://aemt.me/indonesia`)
conn.sendMessage(m.chat, {image: indonesia, caption: `🇮🇩 *Indonesia*`.trim()}, {quoted: m})
}

if (command == 'chambear5') {
let japones = await fetch(`https://aemt.me/japan`)
conn.sendMessage(m.chat, {image: japones, caption: `🇯🇵 *Japonés*`.trim()}, {quoted: m})
}

}
handler.help = ['chambear1', 'chambear2', 'chambear3', 'chambear4', 'chambear5']
handler.command = ['chambear1', 'chambear2', 'chambear3', 'chambear4', 'chambear5']
handler.tags = ['internet']

handler.limit = true
handler.register = true

export default handler