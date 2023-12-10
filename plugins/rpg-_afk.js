import db from '../lib/database.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
*「[❗𝐈𝐍𝐅𝐎❗] ⏰ 𝘿𝙀𝙅𝘼𝙎𝙏𝙀 𝘿𝙀 𝙀𝙎𝙏𝘼𝙍 𝘼𝙁𝙆」*\n ${user.afkReason ? ' \n👀 Razón: ' + user.afkReason : ''}
⏱️ *Durante:* ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
          let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
️[❗𝐈𝐍𝐅𝐎❗] *𝙀𝙇* *𝙐𝙎𝙐𝘼𝙍𝙄𝙊* *𝙌𝙐𝙀* *𝙈𝙀𝙉𝘾𝙄𝙊𝙉𝘼𝙎𝙏𝙀* *𝙀𝙎𝙏𝘼 𝘼𝙁𝙆*
${reason ? '👀 *Razón* : ' + reason : '*Sin razón*'}
⏱️ *Durante* : ${clockString(new Date - afkTime)}
  `.trim())
    }
    return true
}




function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
