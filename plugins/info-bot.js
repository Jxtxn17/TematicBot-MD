import fs from "fs" 
 let handler = m => m 
 handler.all = async function (m) {
 let bot = `*🚀 Hola soy Bot*\nEn que te puedo ayudar?` 
 let vn = [imagen1, imagen2, imagen3, imagen4, img1].getRandom() 
 let chat = global.db.data.chats[m.chat] 
 if (/^bot$/i.test(m.text) && !chat.isBanned) {  
 conn.sendPresenceUpdate('composing', m.chat)
 m.reply(bot)
 return !0}
 }
 export default handler
