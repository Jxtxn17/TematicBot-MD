var handler = async (m, {conn, args, usedPrefix, command}) => {

const isClose = {
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
'desbloquear': 'unlocked',
'bloquear': 'locked',
}[(args[0] || '')];
if (isClose === undefined) {
throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙁𝙊𝙍𝙈𝘼𝙏𝙊 𝙀𝙍𝙍𝙊́𝙉𝙀𝙊*\n\n❕ 𝙀𝙅𝙀𝙈𝙋𝙇𝙊:
┏━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ *○ ${usedPrefix + command} abrir*

┃ *○ ${usedPrefix + command} cerrar*

┃ *○ ${usedPrefix + command} bloquear*

┃ *○ ${usedPrefix + command} desbloquear*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim()
}
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙂𝙍𝙐𝙋𝙊 𝘾𝙀𝙍𝙍𝘼𝘿𝙊 𝘼𝙃𝙊𝙍𝘼 𝙎𝙊𝙇𝙊 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍.*')}

}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['grupo']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true

export default handler