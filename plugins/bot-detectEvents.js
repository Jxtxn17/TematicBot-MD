import {WAMessageStubType} from '@whiskeysockets/baileys' 
 import fetch from 'node-fetch' 
  
 const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)) 
 export async function before(m, {conn, participants, groupMetadata}) { 
  if (!m.messageStubType || !m.isGroup) return !0 
 const groupName = (await conn.groupMetadata(m.chat)).subject 
 const groupAdmins = participants.filter((p) => p.admin) 
 const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './storage/img/sinfoto.jpg' 
 const img = await (await fetch(pp)).buffer() 
 const chat = global.db.data.chats[m.chat] 
 const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)] 
 const mentionsContentM = [m.sender, m.messageStubParameters[0]] 
  
 if (chat.detect2 && m.messageStubType == 29) { 
 let txt1 = `[❗𝐈𝐍𝐅𝐎❗] *𝙉𝙐𝙀𝙑𝙊 𝘼𝘿𝙈𝙄𝙉*\n\n` 
 txt1 += `[❗𝐈𝐍𝐅𝐎❗] • 𝙉𝙤𝙢𝙗𝙧𝙚: @${m.messageStubParameters[0].split`@`[0]}\n` 
 txt1 += `[❗𝐈𝐍𝐅𝐎❗]• 𝙇𝙚 𝙤𝙩𝙤𝙧𝙜𝙤 𝙖𝙙𝙢𝙞𝙣: @${m.sender.split`@`[0]}` 
 await delay(3000 * 3) 
 await conn.sendMessage(m.chat, {text: txt1, mentions: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": nn, "sourceUrl": nn}}}) 
 } 
  
 if (chat.detect2 && m.messageStubType == 30) { 
 let txt2 = `[❗𝐈𝐍𝐅𝐎❗] *𝙐𝙉 𝘼𝘿𝙈𝙄𝙉 𝙈𝙀𝙉𝙊𝙎*\n\n` 
 txt2 += `[❗𝐈𝐍𝐅𝐎❗] • 𝙉𝙤𝙢𝙗𝙧𝙚: @${m.messageStubParameters[0].split`@`[0]}\n` 
 txt2 += `[❗𝐈𝐍𝐅𝐎❗] • 𝙇𝙚 𝙦𝙪𝙞𝙩𝙤́ 𝙖𝙙𝙢𝙞𝙣: @${m.sender.split`@`[0]}` 
 await delay(3000 * 3) 
 await conn.sendMessage(m.chat, {text: txt2, mentions: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": md, "sourceUrl": yt}}}) 
 }}