import { execSync } from 'child_process'
let handler = async (m, { conn, text }) => {
try {  
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
conn.reply(m.chat, stdout.toString(), m)}
//} catch {
var update = execSync('git remote set-url origin https://github.com/Jxtxn17/BaileyBot-MD.git && git pull')
await m.reply(update.toString())
} catch {
await m.reply(`${fg}`) 
}}
handler.help = ['update']
handler.tags = ['owner'] 
handler.command = /^update|actualizar|update2$/i
handler.rowner = true
export default handler 