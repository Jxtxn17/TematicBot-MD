let media = './storage/logos/Turbo.jpg'  
  let handler = async (m, { conn, command }) => {  
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
  let str = `[❗𝐈𝐍𝐅𝐎❗] 𝙌𝙪𝙚 𝙩𝙖𝙡 𝙦𝙪𝙚𝙧𝙞𝙙𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤, 𝙥𝙤𝙧 𝙖𝙝𝙤𝙧𝙖 𝙚𝙡 𝙢𝙚𝙣𝙪́ 𝙙𝙚 ${wm} 𝙀𝙨𝙩𝙖 𝙙𝙖𝙣̃𝙖𝙙𝙤, 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙣𝙞𝙧𝙩𝙚 𝙖 𝙣𝙪𝙚𝙨𝙩𝙧𝙤 𝙘𝙖𝙣𝙖𝙡 𝙙𝙤𝙣𝙙𝙚 𝙥𝙤𝙙𝙧𝙖́𝙨 𝙚𝙨𝙩𝙖𝙧 𝙢𝙖́𝙨 𝙖𝙫𝙞𝙨𝙖𝙙𝙤  
  
 ┏━━━━━━━━━━━┓ 
 ${channel} 
 ┗━━━━━━━━━━━┛ 
  
 𝙥𝙤𝙧 𝙡𝙤 𝙩𝙖𝙣𝙩𝙤 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙚𝙡 𝙢𝙚𝙣𝙪́ 𝙪𝙨𝙖 .𝙢𝙚𝙣𝙪𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤.`  
  await conn.sendFile(m.chat, media, 'Curiosity.jpg', str, fkontak)}  
  handler.tags = ['main']  
  handler.command = /^(menu)$/i 
  handler.register = true  
  export default handler