import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`👋 𝙷𝙾𝙻𝙰 ${nombre}!!
 *${saludo}*

📅 𝙵𝙴𝙲𝙷𝙰: ${fecha}
⏰ 𝙷𝙾𝚁𝙰: ${tiempo}

*◉ 𝙽𝙾 𝙴𝙽𝚅𝙸𝙴́ 𝚂𝙿𝙰𝙼 𝙰𝙻 𝙱𝙾𝚃*
*◉ 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 .𝙼𝙴𝙽𝚄́ 𝙿𝙰𝚁𝙰 𝚅𝙴𝚁 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂*
  
*◉ ¿𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 𝙴𝚂𝚃𝙴 𝙿𝚁𝙾𝚈𝙴𝙲𝚃𝙾 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝚂𝙸𝙶𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰́𝙽𝙳𝙾𝚂𝙴?* 
*◉ 𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝙿𝙾𝚈𝙰𝚁𝙽𝙾𝚂 𝙳𝙴𝙹𝙰𝙽𝙳𝙾 𝚄𝙽𝙰 𝙴𝚂𝚃𝚁𝙴𝙻𝙻𝙸𝚃𝙰 ⭐ 𝙰𝙻 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾.
*https://github.com/Jxtxn17/BaileyBot-MD*`) 
user.pc = new Date * 1
}