//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/Undefined17 | @Azami 
  
 import fs from 'fs' 
 import fetch from 'node-fetch' 
 import { xpRange } from '../lib/levelling.js' 
 const { levelling } = '../lib/levelling.js' 
 import PhoneNumber from 'awesome-phonenumber' 
 import { promises } from 'fs' 
 import { join } from 'path' 
 const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default 
  
 let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => { 
 try { 
 let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {} 
 const d = new Date(new Date + 3600000); 
     const locale = 'es'; 
     const week = d.toLocaleDateString(locale, {weekday: 'long'}); 
     const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'}); 
 let name = conn.getName(m.sender) 
 let taguser = '@' + m.sender.split("@s.whatsapp.net")[0] 
 let { exp, diamond, level, role, money } = global.db.data.users[m.sender] 
 let totalreg = Object.keys(global.db.data.users).length 
     let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
 let _uptime = process.uptime() * 1000 
 let uptime = clockString(_uptime) 
  
 let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
 let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}} 
 let links = linkSity.getRandom() 
     const ftrol = { 
     key : { 
     remoteJid: 'status@broadcast', 
     participant : '0@s.whatsapp.net' 
     }, 
     message: { 
     orderMessage: { 
     itemCount : 2023, 
     status: 1, 
     surface : 1, 
     message: `${name}!`,  
     orderTitle: `▮Menu ▸`, 
     sellerJid: '0@s.whatsapp.net'  
     } 
     } 
     } 
  
 let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation' 
 let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
 let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
 let d4 = 'application/pdf' 
 let d5 = 'application/vnd.android.package-archive' 
 let d6 = 'application/zip' 
 let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}` 
  
     const fload = { 
     key : { 
     remoteJid: 'status@broadcast', 
     participant : '0@s.whatsapp.net'  
     }, 
     message: { 
     orderMessage: { 
     itemCount : 2023, 
     status: 1, 
     surface : 1, 
     message: `${name}` + `\n🚀 Cargando ^ω^`,  
     orderTitle: `▮Menu ▸`, 
     sellerJid: '0@s.whatsapp.net'  
     } 
     } 
     } 
     await conn.reply(m.chat, '*Enviando el menu . . .*', fload, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 Hola!!', body: saludo, sourceUrl: global.ig, thumbnail: await (await fetch(pp)).buffer() }}}) 
 m.react('🚀')      
 let menu = `[❗𝐈𝐍𝐅𝐎❗] 𝙌𝙪𝙚 𝙩𝙖𝙡 𝙦𝙪𝙚𝙧𝙞𝙙𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤, 𝙥𝙤𝙧 𝙖𝙝𝙤𝙧𝙖 𝙚𝙡 𝙢𝙚𝙣𝙪́ 𝙙𝙚 ${wm} 𝙀𝙨𝙩𝙖 𝙙𝙖𝙣̃𝙖𝙙𝙤, 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙣𝙞𝙧𝙩𝙚 𝙖 𝙣𝙪𝙚𝙨𝙩𝙧𝙤 𝙘𝙖𝙣𝙖𝙡 𝙙𝙤𝙣𝙙𝙚 𝙥𝙤𝙙𝙧𝙖́𝙨 𝙚𝙨𝙩𝙖𝙧 𝙢𝙖́𝙨 𝙖𝙫𝙞𝙨𝙖𝙙𝙤 
${channel}
𝙥𝙤𝙧 𝙡𝙤 𝙩𝙖𝙣𝙩𝙤 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙚𝙡 𝙢𝙚𝙣𝙪́ 𝙪𝙨𝙖 .𝙢𝙚𝙣𝙪𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤.` 
 function _0x2daf() { 
     const _0x4c1076 = ['namedoc', 'social', '1017dFLzIP', '11680bWFOeX', 'sendMessage', '1FnTozH', '6qNtNxK', '445374chjKag', '2096504ySppGm', '627669MaFyqj', 'readFileSync', 'En breve se enviará el menú...', '374160lMCurS', '356228pujvOS', './storage/logos/MenuJS.jpg', '1019845zOpQQK', 'pdf', 'chat']; 
     _0x2daf = function() { 
         return _0x4c1076; 
     }; 
     return _0x2daf(); 
 } 
 const _0x110137 = _0x13bb;  
 (function(_0x14d3d7, _0x67b65e) { 
     const _0x3a56bf = { 
             _0x2e964c: 0x1b0, 
             _0x4fc539: 0x1bd, 
             _0x2a1845: 0x1b1, 
             _0x2b6724: 0x1b3, 
             _0x4293cc: 0x1b8, 
             _0x59080a: 0x1b9 
         }, 
         _0x30692c = _0x13bb, 
         _0x119b1c = _0x14d3d7(); 
     while (!![]) { 
         try { 
             const _0x181128 = parseInt(_0x30692c(0x1bb)) / 0x1 * (parseInt(_0x30692c(_0x3a56bf._0x2e964c)) / 0x2) + parseInt(_0x30692c(_0x3a56bf._0x4fc539)) / 0x3 + parseInt(_0x30692c(_0x3a56bf._0x2a1845)) / 0x4 + parseInt(_0x30692c(_0x3a56bf._0x2b6724)) / 0x5 * (parseInt(_0x30692c(0x1bc)) / 0x6) + -parseInt(_0x30692c(0x1ad)) / 0x7 + -parseInt(_0x30692c(0x1be)) / 0x8 + parseInt(_0x30692c(_0x3a56bf._0x4293cc)) / 0x9 * (-parseInt(_0x30692c(_0x3a56bf._0x59080a)) / 0xa); 
             if (_0x181128 === _0x67b65e) break; 
             else _0x119b1c['push'](_0x119b1c['shift']()); 
         } catch (_0x1caf7d) { 
             _0x119b1c['push'](_0x119b1c['shift']()); 
         } 
     } 
 }(_0x2daf, 0x235d2)); 
  
 function _0x13bb(_0x16c7de, _0x1a27b8) { 
 const _0x2dafbc = _0x2daf(); 
 return _0x13bb = function(_0x13bbaf, _0x156d41) { 
 _0x13bbaf = _0x13bbaf - 0x1ad; 
 let _0x1a2b8a = _0x2dafbc[_0x13bbaf]; 
 return _0x1a2b8a; 
 }, _0x13bb(_0x16c7de, _0x1a27b8); 
 } 
 let buttonMessage = { 
     'document': { 
         'url': md, 
     }, 
     'mimetype': td, 
     'fileName': '☰ D A S B O A R D ☰', 
     'fileLength': '99999999999999', 
     'pageCount': '999', 
     'contextInfo': { 
     'externalAdReply': { 
     'showAdAttribution': !![], 
             'mediaType': 0x1, 
             'previewType': "PHOTO", 
             'title': 'Hola!!', 
             'thumbnail': imagen1, 
             'renderLargerThumbnail': !![], 
             'sourceUrl': md 
         } 
     }, 
   'caption': menu['trim']() 
 } 
 await conn.sendMessage(m.chat, buttonMessage, {quoted: fkontak}) 
 } catch { 
 conn.reply(m.chat, '*⚠️ EL MENU TIENE UN ERROR PRUEBE CON EL MENU COMPLETO: (.menucompleto)*', fpoll, m) 
 }} 
 handler.tags = ['main'] 
 handler.command = /^(menu)$/i 
 handler.register = true 
 export default handler 
  
 function clockString(ms) { 
 let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) 
 let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60 
 let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60 
 return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')} 
  
 function ucapan() { 
     const time = moment.tz('America/Los_Angeled').format('HH') 
     let res = "Buenas noches 🌙" 
     if (time >= 4) { 
         res = "Buen día 🌄" 
     } 
     if (time > 10) { 
         res = "Buenas tardes ☀️" 
     } 
     if (time >= 15) { 
         res = "Buenas tardes 🌅" 
     } 
     if (time >= 18) { 
         res = "Buenas noches 🌙" 
     } 
     return res 
 } 
  
 function pickRandom(list) { 
   return list[Math.floor(Math.random() * list.length)] 
     }