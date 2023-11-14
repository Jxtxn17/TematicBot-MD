let media = './storage/logos/Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `┏ ┅ ━━━━━━━━━━━━━━━━━
 ┇          「 𝑨𝑷𝑶𝒀𝑨𝑹 」 
 ┣ ┅ ━━━━━━━━━━━━━━━━━
 ┃ ¿ 𝙷𝙾𝙻𝙰 𝙲𝙾𝙼𝙾 𝙴𝚂𝚃𝙰𝚂 ?
 ┃ 
 ┃ 𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 𝙴𝙻 𝙿𝚁𝙾𝚈𝙴𝙲𝚃𝙾 𝙳𝙴  
 ┃ (𝚃𝚞𝚛𝚋𝚘𝙱𝚘𝚝-𝙼𝙳) 𝙳𝙾𝙽𝙰𝙽𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂  
 ┃ 𝙿𝙰𝚁𝙰 𝙴𝙹𝙴𝙲𝚄𝚃𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃, 𝙿𝚄𝙴𝙳𝙴𝚂 𝙳𝙾𝙽𝙰𝚁𝙻𝙾 
 ┃ 𝙰𝙻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁 𝙲𝙾𝙽 : wa.me/51929972576
 ┃ 𝙾 𝚃𝙰𝙼𝙱𝙸𝙴́𝙽 𝙿𝚄𝙴𝙳𝙴𝚂 𝙳𝙾𝙽𝙰𝚁 𝙰𝙻 ${paypal}
 ┃ 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝚂𝙴𝙶𝚄𝙸𝚁 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙽𝙳𝙾 𝙴𝙻 𝙱𝙾𝚃
 ┃ 𝚈 𝚀𝚄𝙴 𝚄𝚂𝚃𝙴𝙳𝙴𝚂 𝚃𝙴𝙽𝙶𝙰𝙽 𝙼𝙴𝙹𝙾𝚁 𝚂𝙴𝚁𝚅𝙸𝙲𝙸𝙾, 𝙶𝚁𝙰𝙲𝙸𝙰𝚂.
 ┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━`
await conn.sendFile(m.chat, media, 'Curiosity.jpg', str, fkontak)}
handler.tags = ['main']
handler.command = /^donar|donate|donasi$/i
handler.exp = 35
handler.register = true
export default handler
