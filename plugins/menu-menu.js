let media = './storage/logos/Menu2.jpg' 
 let handler = async (m, { conn, command }) => { 
 let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

//fakes
const ftrol = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: `${name}!`, orderTitle: `▮Menu ▸`, sellerJid: '0@s.whatsapp.net' }}} 
 const fload = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : -99999999, status: 1, surface : 1, message: `CuriosityBot-MD 🍧` + `\nAzami`, orderTitle: `▮Menu ▸`, thumbnail: await (await fetch(pp)).buffer(), sellerJid: '0@s.whatsapp.net' }}} 
 
let name = conn.getName(m.sender)
  
 let menu = m.reaction (✅)
 `*👋 Hola, ${name}* 
  
 *_${saludo}_* 
  
 .allmenu 
 _(Para ver el menú completo)_` 
 await conn.sendFile(m.chat, media, 'Curiosity.jpg', str, fkontak)} 
 handler.tags = ['main'] 
 handler.command = /^menu$/
 handler.exp = 35 
 handler.register = true 
 export default handler