let handler = async (m, {conn, text}) => {
  if (!text) throw "*❗𝐈𝐍𝐅𝐎❗] 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 @𝙩𝙖𝙜 𝘿𝙀 𝘼𝙇𝙂𝙐𝙉 𝙐𝙎𝙐𝘼𝙍𝙄𝙊*"
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw "*[❗𝐈𝐍𝐅𝐎❗] 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙀𝙇 @𝙩𝙖𝙜 𝘿𝙀 𝘼𝙇𝙂𝙐𝙉 𝙐𝙎𝙐𝘼𝙍𝙄𝙊*"
  let users = global.db.data.users
  users[who].banned = false
  conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝙀𝙎𝙏𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙁𝙐𝙀 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝙊 𝘾𝙊𝙉 𝙀́𝙓𝙄𝙏𝙊*
\n*𝙔𝘼 𝙋𝙐𝙀𝘿𝙀 𝙐𝙎𝘼𝙍 𝘽𝘼𝙄𝙇𝙀𝙔𝘽𝙊𝙏-𝙈𝘿*`, m)}
handler.help = ["unbanuser"]
handler.tags = ["owner"]
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
