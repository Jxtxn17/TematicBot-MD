import fetch from 'node-fetch'

var handler = async (m, {command, conn}) => {

if (command == 'pepon') {
let pepon = await fetch(`https://raw.githubusercontent.com/Jxtxn17/BaileyBot-MD/master/src/JSON/Gordo-PEPON.json`)
conn.sendMessage(m.chat, {image: Gordo, caption: `*Pepon*`.trim()}, {quoted: m})
}

}
handler.help = ['pepon']
handler.command = ['pepon']
handler.tags = ['nsfw']

export default handler