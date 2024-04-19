//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  /*'main': '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾́𝙽 💻',
  'group': '𝙶𝚁𝚄𝙿𝙾𝚂',
  'game': '𝙹𝚄𝙴𝙶𝙾𝚂',
  'dl': '𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂',
  'jadibot': '𝙹𝙰𝙳𝙸𝙱𝙾𝚃', 
  'nable': '𝙴𝙽𝙰𝙱𝙻𝙴 / 𝙳𝙸𝚂𝙰𝙱𝙻𝙴', 
  'internet': '𝙱𝚄𝚂𝙲𝙰𝙳𝙾𝚁𝙴𝚂',
  'convertido': '𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚁𝙴𝚂', 
  'sticker': '𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂',
  'rg': '𝚁𝙿𝙶',
  'audio': '𝙰𝚄𝙳𝙸𝙾𝚂-𝙴𝙵𝙴𝙲𝚃𝙾𝚂', 
  'tools': '𝙷𝙴𝚁𝚁𝙰𝙼𝙸𝙴𝙽𝚃𝙰𝚂', 
  'anime': '𝙰𝙽𝙸𝙼𝙴', 
  'nsfw': '𝙽𝚂𝙵𝚆 +18', 
  'owner': '𝙾𝚆𝙽𝙴𝚁',*/
}
const defaultMenu = {
  before: `╭─ - ＵＳＵＡＲＩＯ ----- •♫•♬••♬•♫•
│✰【𝐁𝐚𝐢𝐥𝐞𝐲𝐁𝐨𝐭-𝐌𝐃】✰
│╭─────────────────
││◉ *Nombre:* Axx
││◉ *Limite:* 20
││◉ *Nivel:* 0
││◉ *Rango* Novato
││◉ *Xp:* 4232
│╰─────────────────
╰─ დ.•* 🦦 *””*.დ ----- დ.•* 🍌 *””*.დ ---

╭─ - ＩＮＦＯＢＯＴ ----- .•♫•♬••♬•♫•. ╴╴╴
│╭─────────────────
││◉ *Creador:* Jxtxn17 / Ax
││◉ *Usuarios En Total:* 18
││◉ *Usuarios Registrados:* 321
││◉ *Tiempo activo: 00d 00h 01m 
│╰─────────────────
╰─ დ.•* 🦦 *””*.დ ----- დ.•* 🍭 *””*.დ ---

╭─ - ＨＯＹ ----- .•♫•♬• •♬•♫•. ---
│╭─────────────────
││📅 *Fecha:* 19 de abril de 2024
│╰─────────────────
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ --

╭─ - info ----- .•♫•♬• •♬•♫•. --- 
│○ 📝 .groups
│○ 📝 .grouplist
│○ 📝 .infinity
│○ 📝 .host
│○ 📝 .hosting
│○ 📝 .database
│○ 📝 .user
│○ 📝 .horario
│○ 📝 .script
│○ 📝 .setcmd
│○ 📝 .delcmd
│○ 📝 .listcmd
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - anime ----- .•♫•♬• •♬•♫•. --- 
│○ 🔰 .otakusearch
│○ 🔰 .animelink
│○ 🔰 .animeinfo
│○ 🔰 .lolice
│○ 🔰 .meme
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - nsfw ----- .•♫•♬• •♬•♫•. --- 
│○ 🔞 .labiblia
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - downloader ----- .•♫•♬• •♬•♫•. --- 
│○ 🛸 .xnxxsearch <query>
│○ 🛸 .tiktokrandom
│○ 🛸 .tiktoksearch
│○ 🛸 .fb
│○ 🛸 .gitclone
│○ 🛸 .mediafire
│○🛸  .apkmod
│○ 🛸 .play
│○ 🛸 .play2
│○ 🛸 .tiktok
│○ 🛸 .yta
│○ 🛸 .ytv
│○ 🛸 .tiktokslide
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ --

╭─ - ai ----- .•♫•♬• •♬•♫•. --- 
│○ ✈️ .bard
│○ ✈️ .dalle
│○ ✈️ .dall2
│○ ✈️ .hd
│○ ✈️ .gimage <query>
│○ ✈️ .imagen <query>
│○ ✈️ .pinterest <keyword>
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - audio ----- .•♫•♬• •♬•♫•. --- 
│○ 🔊 .bass
│○ 🔊 .blown
│○ 🔊 .deep
│○ 🔊 .earrape
│○ 🔊 .fast
│○ 🔊 .fat
│○ 🔊 .nightcore
│○ 🔊 .reverse
│○ 🔊 .robot
│○ 🔊 .slow
│○ 🔊 .smooth
│○ 🔊 .tupai
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - internet ----- .•♫•♬• •♬•♫•. --- 
│○ 📱 .fetch <url>
│○ 📱 .get <url>
│○ 📱 .yts <pencarian>
│○ 📱 .ytsearch <pencarian>
│○ 📱 .githubsearch
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - nable ----- .•♫•♬• •♬•♫•. --- 
│○ ✅ .enable
│○ ❌ .disable
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - fix ----- .•♫•♬• •♬•♫•. --- 
│○  .fixmsgespera
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - frases ----- .•♫•♬• •♬•♫•. --- 
│○ 🧸 .consejo
│○ 🧸 .oracion
│○ 🧸 .piropo
│○ 🧸 .refran
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - grupo ----- .•♫•♬• •♬•♫•. --- 
│○ ⚙️ .add
│○ ⚙️ .admins
│○ ⚙️ .aprobar
│○ ⚙️ .group open / close
│○ ⚙️ .grupo abrir / cerrar
│○ ⚙️ .demote
│○ ⚙️ .hidetag
│○ ⚙️ .idgc
│○ ⚙️ .infogrupo
│○ ⚙️ .kick
│○ ⚙️ .link
│○ ⚙️ .promote
│○ ⚙️ .revoke
│○ ⚙️ .setbye
│○ ⚙️ .setdesc
│○ ⚙️ .setname
│○ ⚙️ .setwelcome
│○ ⚙️ .simulate
│○ ⚙️ .tagall
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - implementos ----- .•♫•♬• •♬•♫•. --- 
│○ 🛠 .acortar
│○ 🛠 .delete
│○ 🛠 .dropmail
│○ 🛠 .fake
│○ 🛠 .nowa
│○ 🛠 .qrcode
│○ 🛠 .spoiler
│○ 🛠 .readqr
│○ 🛠 .style
│○ 🛠 .traducir
│○ 🛠 .readviewonce
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - tools ----- .•♫•♬• •♬•♫•. --- 
│○ 💡 .calc <expression>
│○ 💡 .npmsearch
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - jadibot ----- .•♫•♬• •♬•♫•. --- 
│○ 🤖 .token
│○ 🤖 .gettoken
│○ 🤖 .serbottoken
│○ 🤖 .jadibot
│○ 🤖 .serbot
│○ 🤖 .getcode
│○ 🤖 .rentbot
│○ 🤖 .berhenti
│○ 🤖 .stop
│○ 🤖 .listjadibot
│○ 🤖 .bots
│○ 🤖 .subsbots
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - juegos ----- .•♫•♬• •♬•♫•. --- 
│○ 🎭 .acertijo
│○ 🎭 .delttt
│○ 🎭 .doxear
│○ 🎭 .gay
│○ 🎭 .los10
│○🎭 .mates
│○ 🎭 .personalidad
│○ 🎭 .ppt
│○ 🎭 .pregunta
│○ 🎭 .reto
│○ 🎭 .simi
│○🎭 .slot
│○ 🎭 .sorteo
│○ 🎭 .tictactoe
│○ 🎭 .adventure
│○ 🎭 .berburu
│○ 🎭 .tagme
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - rpg ----- .•♫•♬• •♬•♫•. --- 
│○ 🎪 .afk *<razón>*
│○ 🎪 .bal
│○ 🎪 .daily
│○ 🎪 .levelup
│○ 🎪 .minar
│○ 🎪 .minar
│○ 🎪 .myns
│○ 🎪 .profile [@user]
│○ 🎪 .saquear [@user]
│○ 🎪 .buy
│○ 🎪 .buyall
│○ 🎪 .transfer [tipo] [cantidad] [@tag]
│○ 🎪 .unreg <numero de serie>
│○ 🎪 .unregister <numero de serie>
│○ 🎪 .reg <nombre.edad>
│○ 🎪 .work
│○ 🎪 .limit [@user]
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - sticker ----- .•♫•♬• •♬•♫•. --- 
│○ 🚀 .qc
│○ 🚀 .s
│○ 🚀 .stickers
│○ 🚀 .wm <packname>|<author>
│○ 🚀 .toimg (reply)
│○ 🚀 .tourl <reply image>
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - transformador ----- .•♫•♬• •♬•♫•. --- 
│○ 🛰 .toanime
│○ 🛰 .togifaud
│○ 🛰 .tomp3
│○ 🛰 .tovn
│○ 🛰 .tovideo
│○ 🛰 .tts
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---

╭─ - owner ----- .•♫•♬• •♬•♫•. --- 
│○ 💻 . enable
│○ 💻  .disable
│○ 💻 .delbailey / ds
│○ 💻 .join [chat.whatsapp.com]
│○ 💻  .reporte <teks>
│○ 💻 .request <teks>
│○ 💻 .reunionstaff
│○ 💻 .add1 @numero
│○ 💻 .blocklist
│○ 💻 .broadcast <teks>
│○ 💻 .bc <teks>
│○ 💻 .broadcastchats <teks>
│○ 💻  .bcchats <teks>
│○ 💻  .creategroup
│○ 💻  .deleteplugin *<nombre>*
│○ 💻 .delprem <@user>
│○ 💻.getplugin
│○ 💻  .inspect
│○ 💻 .spamgp
│○ 💻 .enlace1
│○ 💻 .renameplugin *<nombre viejo> | <nombre nuevo>*
│○ 💻 .saveplugin *<nombre>*
│○ 💻 .setbotname <teks>
│○ 💻 .setprefix [prefix]
│○ 💻 .spamwa <number>|<mesage>|<no of messages>
│○ 💻 .unbanchat
│○ 💻 .unbanuser
│○ 💻 .addprem <@user>
│○ 💻 .banchat
│○ 💻 .cleartmp
│○ 💻 .restart
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, diamond, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    let pp = './storage/logos/Menu2.jpg'
     await conn.reply(m.chat, '*✰【𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐄𝐥 𝐌𝐞𝐧𝐮 . . .】✰*', fkontak) 
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m, null, nnn)
    /*conn.sendButton(m.chat, text.trim(), '▢ DyLux  ┃ ᴮᴼᵀ\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98_ff', pp, [
      ['ꨄ︎ Apoyar', `${_p}donate`],
      ['⏍ Info', `${_p}botinfo`],
      ['⌬ Grupos', `${_p}gpdylux`]
    ],m, rpl)*/


m.react('🚀')

  } catch (e) {
    conn.reply(m.chat, '⚠️ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
handler.help = ['help']
handler.tags = ['main']
handler.command = ['help',
'menucompleto', 'allmenu'] 
handler.register = true

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}