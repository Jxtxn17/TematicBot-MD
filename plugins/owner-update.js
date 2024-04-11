import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {
//await conn.sendMessage(m.chat, { que: { texto: 'Isaac Roba Codigo', key: m.key } })
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫\n *ᥒ᥆ һᥲᥡ ᥒᥲძᥲ 𝗊ᥙᥱ actualizar.*'
if (messager.includes('Updating')) messager = '🚫 𝐀𝐓𝐄𝐍𝐂𝐈𝐎𝐍 🚫\n *ᑲᥲіᥣᥱᥡ ᥲᥴ𝗍ᥙᥲᥣіzᥲძ᥆ ᥴ᥆rrᥱᥴ𝗍ᥲmᥱᥒ𝗍ᥱ.*\n\n' + stdout.toString()
conn.reply(m.chat, messager,)
} catch { 
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('sessions/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `🚩 *El bot se ha actualizado desde el servidor y entra conflicto  con el comando update.*\n\nArchivos En Conflicto:\n\n${conflictedFiles.join('\n')}`
await conn.reply(m.chat, errorMessage,)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '🔵 *Api Caida*'
if (error.message) {
errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
}
await conn.reply(m.chat, errorMessage2,)
}
}

}
handler.help = ['update', 'actualizar']
handler.tags = ['own']
handler.command = /^(update|actualizar|gitpull)$/i
handler.rowner = true
//handler.limit = false
//handler.private = false


export default handler
