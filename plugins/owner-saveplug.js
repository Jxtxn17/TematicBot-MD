import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*[❗] QUE NOMBRE LE PONGO AL PLUGIN.*`
    if (!m.quoted.text) throw `❗RESPONDE AL MENSAJE!`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Guardado en ${path}`)
}
handler.help = ['saveplugin'].map(v => v + ' *<nombre>*')
handler.tags = ['owner']
handler.command = ["salvar", "saveplugin"]

handler.rowner = true
export default handler
