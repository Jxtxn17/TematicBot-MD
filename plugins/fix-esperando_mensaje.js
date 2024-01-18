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
await conn.reply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] *𝙉𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙤 𝙣𝙞𝙣𝙜𝙪́𝙣 𝙖𝙧𝙘𝙝𝙞𝙫𝙤
𝙦𝙪𝙚 𝙞𝙣𝙘𝙡𝙪𝙮𝙖 𝙡𝙖 𝙄𝘿 𝙙𝙚𝙡 𝙘𝙝𝙖𝙩*', m, fake, )
} else {
await conn.reply(m.chat, `[❗𝐈𝐍𝐅𝐎❗] *𝙎𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧𝙤𝙣 ${filesDeleted} 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙙𝙚 𝙨𝙚𝙨𝙨𝙞𝙤𝙣*`, m, fake, )
conn.reply(m.chat, `[❗𝐈𝐍𝐅𝐎❗]*𝙃𝙤𝙡𝙖, 𝙡𝙤𝙜𝙧𝙖𝙨 𝙫𝙚𝙧𝙢𝙚?,𝙎𝙞 𝙣𝙤 𝙚𝙨 𝙖𝙨𝙞́ 𝙝𝙖𝙜𝙖 𝙪𝙣 𝙥𝙚𝙦𝙪𝙚𝙣̃𝙤 𝙨𝙥𝙖𝙢`, m, fake, )
}
} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err)
await conn.reply(m.chat, '🚩 *Ocurrió un fallo*', m, fake, )
}

}
handler.help = ['ds']
handler.tags = ['bot']
handler.command = /^(fixmsgespera|ds)$/i

handler.register = true

export default handler