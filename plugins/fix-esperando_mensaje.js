import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] *𝙐𝙩𝙞𝙡𝙞𝙯𝙖 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙙𝙞𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙚𝙣 𝙚𝙡 𝙣𝙪́𝙢𝙚𝙧𝙤 𝙥𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 𝙙𝙚𝙡 𝘽𝙤𝙩*', m, fake, )
}

let chatId = m.isGroup ? [m.chat, m.sender] : [m.sender]
let sessionPath = './sessions/'

try {

let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (let file of files) {
for (let id of chatId) {
if (file.includes(id.split('@')[0])) {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
break
}}}

if (filesDeleted === 0) {
await conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] *𝙉𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙤 𝙣𝙞𝙣𝙜𝙪́𝙣 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙦𝙪𝙚 𝙞𝙣𝙘𝙡𝙪𝙮𝙖 𝙡𝙖 𝙄𝘿 𝙙𝙚𝙡 𝙘𝙝𝙖𝙩*', m, fake, )
} else {
await conn.reply(m.chat, `🎌 *Se eliminaron ${filesDeleted} archivos de sesión*`, m, fake, )
conn.reply(m.chat, `😸 *¡Hola! logras verme*`, m, fake, )
}
} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err)
await conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] *𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙛𝙖𝙡𝙡𝙤*', m, fake, )
}

}
handler.help = ['ds']
handler.tags = ['bot']
handler.command = /^(fixmsgespera|ds)$/i

handler.register = true

export default handler