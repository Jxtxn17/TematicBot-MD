var handler = async (m, { conn,usedPrefix, text }) => {

if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱȷᥱm⍴ᥣ᥆ ძᥱ ᥙs᥆:*\n\n*${usedPrefix}promote @tag*\n*${usedPrefix}promote responder a un mensaje*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱᥣ ᥒᥙ́mᥱr᥆ ᥱs іᥒᥴ᥆rrᥱᥴ𝗍᥆, іᥒ𝗍ᥱᥒ𝗍ᥱ ძᥱ ᥒᥙᥱ᥎᥆*`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `*✅ ᥱ᥊і𝗍᥆, ᥲһ᥆rᥲ 𝗍іᥱᥒᥱ ⍴᥆ძᥱr ᥱᥒ ᥱs𝗍ᥱ grᥙ⍴᥆*`, m)}

}
handler.help = ['promote']
handler.tags = ['grupo']
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler