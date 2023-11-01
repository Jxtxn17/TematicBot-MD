let handler = async (m) => { 
 global.db.data.chats[m.chat].isBanned = true 
 m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏* *𝙁𝙐𝙀*
*𝘽𝘼𝙉𝙀𝘼𝘿𝙊*
 \n\n*𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙋𝙀𝙍𝙈𝙄𝙎𝙊 𝙋𝘼𝙍𝘼 𝙐𝙎𝘼𝙍𝙈𝙀 𝙃𝘼𝙎𝙏𝘼 𝙌𝙐𝙀 𝙎𝙀𝘼 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝙊*`)
}
 handler.help = ['banchat'] 
 handler.tags = ['owner'] 
 handler.command = /^banchat$/i 
 handler.botAdmin = true 
 handler.admin = true  
 handler.group = true 
  
 export default handler