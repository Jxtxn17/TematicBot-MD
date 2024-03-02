import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `[❗𝐈𝐍𝐅𝐎❗] *INGRESE SU NÚMERO DR SÉRIE, SI NO SABE CUAL ES USE #myns*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `[❗𝐈𝐍𝐅𝐎❗] *VERIFIQUE QUE SU NÚMERO DE SÉRIE SEA CORRECTO*`
user.registered = false
m.reply(`[❗𝐈𝐍𝐅𝐎❗] *USTED YA NO ESTÁ REGISTRADO*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['rg']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
