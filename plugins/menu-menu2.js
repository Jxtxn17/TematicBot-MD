import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];

 const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '*✰【𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐄𝐥 𝐌𝐞𝐧𝐮】✰. . .*',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋🏻 ¡𝐇𝐨𝐥𝐚!', body: 'Como éstas?', sourceUrl: global.channel, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📍');
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } })
  let txt =`╭─ - ＵＳＵＡＲＩＯ ----- •♫•♬••♬•♫•
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
╰─ დ.•* 🦦 *””*.დ ╴╴╴╴╴დ.•* 🍇 *””*.დ ---`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '✰【𝐁𝐚𝐢𝐥𝐞𝐲𝐁𝐨𝐭-𝐌𝐃】✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🧩');
  } catch {
    conn.reply(m.chat, '🧸 *Ocurrió Un Error*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu𝟐|allmenu|menú|help|menucompleto)$/i;
handler.register = true
export default handler;