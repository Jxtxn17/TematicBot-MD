import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *іᥒgrᥱsᥱ sᥙ ᥒᥙ́mᥱr᥆ ძᥱ sᥱ́rіᥱ, sі ᥒ᥆ sᥲᑲᥱ ᥴᥙᥲᥣ ᥱs ᥙsᥱ #myns*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *᥎ᥱrі𝖿і𝗊ᥙᥱ 𝗊ᥙᥱ sᥙ ᥒᥙ́mᥱr᥆ ძᥱ sᥱ́rіᥱ sᥱᥲ ᥴ᥆rrᥱᥴ𝗍᥆*`
user.registered = false
m.reply(`🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *ᥙs𝗍ᥱძ ᥡᥲ ᥒ᥆ ᥱs𝗍ᥲ rᥱgіs𝗍rᥲძ᥆*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['rg']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
