let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[⚠️] ESCRIBE EL REPORTE*\n\n💡 EJEMPLO\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funciona.*`
if (text.length < 8) throw `⚠️ *Mínimo 10 caracteres para hacer El Reporte.*`
if (text.length > 1000) throw `⚠️ *Máximo 1000 caracteres para hacer El Reporte.*`
let teks = `*⚠️ 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 ⚠️*\n*📞 𝙉𝙐́𝙈𝙀𝙍𝙊*\nWa.me/${m.sender.split`@`[0]}\n*📝 𝙈𝙀𝙉𝙎𝘼𝙅𝙀*\n${text}`
conn.reply('51929972576@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`*[⚠️] Exito el reporte ha sido enviado a mí Creador. Tendrá una respuesta pronto. Si se detecta que el reporte es Falso será Ignorado el reporte.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.exp = 100 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
