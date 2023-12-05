import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙌𝙐𝙀 𝙉𝙊𝙈𝘽𝙍𝙀 𝙇𝙀 𝙋𝙊𝙉𝙂𝙊 𝘼𝙇 𝙋𝙇𝙐𝙂𝙄𝙉.*`
    if (!m.quoted.text) throw `[❗𝐈𝐍𝐅𝐎❗] 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀!`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Guardado en ${path}`)
}
handler.help = ['saveplugin'].map(v => v + ' *<nombre>*')
handler.tags = ['owner']
handler.command = ["salvar", "saveplugin"]

handler.rowner = true
export default handler
