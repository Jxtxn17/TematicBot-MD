import db from '../lib/database.js'
let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]
    if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘾𝙊𝙇𝙊𝙌𝙐𝙀 𝙎𝙐 𝙈𝙊𝙏𝙄𝙑𝙊 𝙋𝘼𝙍𝘼 𝙀𝙎𝙏𝘼𝙍 𝘼𝙁𝙆*\n\n💡 EJEMPLO\n*#afk Voy a comer*`)
    if (text.length < 10) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙇 𝙈𝙊𝙏𝙄𝙑𝙊 𝙀𝙎 𝙈𝙐𝙔 𝘾𝙊𝙍𝙏𝙊, 𝙈𝙄́𝙉𝙄𝙈𝙊 10 𝘾𝘼𝙍𝘼́𝘾𝙏𝙀𝙍𝙀𝙎*`)
    user.afk = + new Date
    user.afkReason = text
    conn.reply(m.chat, `
\t\t\t\t *「[❗𝐈𝐍𝐅𝐎❗]𝙀𝙎𝙏𝘼𝘿𝙊 𝘼𝙁𝙆」*
 
*► 𝙀𝙨𝙩𝙖𝙧𝙖́𝙨 𝙖𝙛𝙠 𝙝𝙖𝙨𝙩𝙖 𝙦𝙪𝙚 𝙚𝙣𝙫𝙞́𝙚𝙨 𝙪𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚*

👤 *𝙐𝙨𝙪𝙖𝙧𝙞𝙤:* @${m.sender.split`@`[0]} 
👀 *𝙍𝙖𝙯𝙤́𝙣:* ${text ? ': ' + text : ''}
  `, m, { mentions: [m.sender]})
}
handler.help = ['afk *<razón>*']
handler.tags = ['rg']
handler.command = ['afk']
handler.register = true

export default handler
