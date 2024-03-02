import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `[❗𝐈𝐍𝐅𝐎❗] *Ya estás registrado*\n\n¿Quiere volver a registrarse?\n\n💬 Use este comando para *eliminar su registro*\n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `[❗𝐈𝐍𝐅𝐎❗] *Formato incorrecto*\n\n📝 Uso del comamdo: *${usedPrefix + command} nombre.edad*\n💡 Ejemplo : *${usedPrefix + command}* ${name2}.18`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '[❗𝐈𝐍𝐅𝐎❗] €€El nombre no puede estar vacío*'
  if (!age) throw '[❗𝐈𝐍𝐅𝐎❗] *La edad no puede estar vacía*'
  if (name.length >= 30) throw '*[❗𝐈𝐍𝐅𝐎❗] El nombre es demasiado largo*' 
  age = parseInt(age)
  if (age > 100) throw '*Pellé quiere jugar con el bot?*'
  if (age < 5) throw '*Eres menor, no  puedes registrarte en ${wm}*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
🗃️ *R E G I S T R A D O* 🗃️
🪁 *Nombre:* ${name}
🎨 *Edad* : ${age} años
🥏 *Numero de serie*:
${sn}

 *${usedPrefix}menu* para ver el Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler


