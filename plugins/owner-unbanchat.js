let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙁𝙐𝙀 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝙊*\n\n*𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙏𝙄𝙀𝙉𝙀 𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝘿𝙊 𝙐𝙎𝘼𝙍𝙈𝙀*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
export default handler
