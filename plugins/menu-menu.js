let media = './storage/logos/Menu1.jpg' 
 let handler = async (m, { conn, command }) => { 

//Fakes 
 let fkontak= { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: `${name}!`, orderTitle: `▮Menu ▸`, sellerJid: '0@s.whatsapp.net' }}} 
 const fload = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : -99999999, status: 1, surface : 1, message: `BaileyBot-MD 🍧` + `\nJxtxn17`, orderTitle: `▮Menu ▸`, thumbnail: await (await fetch(pp)).buffer(), sellerJid: '0@s.whatsapp.net' }}}

m.react ('✅')

 let menu = `👋 _¿Hola querido usuario como esta?_ 

use .allmenu  
  _(Para ver el menú completo)_` 
 await conn.sendFile(m.chat, media, 'Curiosity.jpg', menu, fkontak)} 
 handler.tags = ['main'] 
 handler.command = /^menu$/i 
 handler.exp = 35 
 export default handler