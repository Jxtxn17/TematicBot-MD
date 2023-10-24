/*

⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo fue realizado por:
- ReyEndymion (https://github.com/ReyEndymion)

⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠ -- ⚠ PROHIBIDO EDITAR ⚠

*/

import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from "fs"
import path, { join } from 'path'
let handler  = async (m, { conn }, args) => {
    let parentw = conn
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let uniqid = `${who.split`@`[0]}` //parentw.getName(who)
    if (global.conn.user.jid !== conn.user.jid) conn.sendMessage(m.chat, {text: '*[❗𝐈𝐍𝐅𝐎❗] 𝙋𝙤𝙧 𝙦𝙪𝙚 𝙣𝙤 𝙫𝙖𝙨 𝙙𝙞𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙘𝙤𝙣 𝙚𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝘽𝙤𝙩?*'}, { quoted: m }) 
    else {
      await conn.sendMessage(m.chat, {text: "[❗𝐈𝐍𝐅𝐎❗] 𝘼𝙙𝙞𝙤𝙨 𝙗𝙤𝙩"}, { quoted: m }) 
      }

    try {
        
        fs.rmdir("./jadibts/" + uniqid, { recursive: true, force: true })
        .then(() => {
        console.log('*[❗𝐈𝐍𝐅𝐎❗] 𝙎𝙀 𝙃𝘼𝙉 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝙏𝙊𝘿𝙊𝙎 𝙇𝙊𝙎 𝘼𝙍𝘾𝙃𝙄𝙑𝙊𝙎*')
        })
        await conn.sendMessage(m.chat, {text : 𝙏𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙛𝙪𝙚𝙧𝙤𝙣 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨" } , { quoted: m })
        /*fs.unlink("./jadibts/" + uniqid + "/creds.json")
        console.log('File removed')
        await conn.sendMessage(m.chat, {text : "𝙡𝙖 𝙨𝙚𝙨𝙨𝙞𝙤𝙣 𝙛𝙪𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙖 " } , { quoted: m })
        await fs.unlink("./jadibts/" + uniqid).md
        console.log('Folder removed')
        await conn.sendMessage(m.chat, {text : "la carpeta fue eliminada " } , { quoted: m })*/
        } catch(err) {
        console.error('*[❗𝐈𝐍𝐅𝐎❗] 𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙏𝘼 𝙊 𝙎𝙀𝙎𝙄𝙊́𝙉 𝙉𝙊 𝙀𝙓𝙄𝙎𝙏𝙀𝙉*', err)
      
    }
            
  }

  handler.help = ['delete']
  handler.tags = ['jadibot']
  handler.command = /^(deletebot)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  export default handler
