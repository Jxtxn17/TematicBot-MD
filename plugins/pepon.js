import fs from "fs" 
 let handler = m => m 
 handler.all = async function (m) { 
 let bot = `Peponnnn` 
 let vn = [img8].getRandom() 
 let chat = global.db.data.chats[m.chat] 
 if (/^pepon$/i.test(m.text) && !chat.isBanned) {  
 conn.sendPresenceUpdate('recording', m.chat)     
 conn.sendFile(m.chat, vn, 'bot.jpg', bot, m, true, { type: 'conversation', ptt: true, sendEphemeral: true, quoted: estilo })} 
 return !0 
 } 
 export default handler
