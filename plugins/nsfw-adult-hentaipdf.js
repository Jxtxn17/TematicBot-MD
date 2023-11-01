import fetch from 'node-fetch'; 
 import PDFDocument from 'pdfkit'; 
 import {extractImageThumb} from '@whiskeysockets/baileys'; 
 const handler = async (m, {conn, text, usedPrefix, command, args}) => { 
   if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '[❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾𝚂, 𝙰𝙲𝚃𝙸𝚅𝙰𝙻𝙾𝚂 𝙲𝙾𝙽.enable nsfw'; 
   if (!text) throw `[❗𝐈𝐍𝐅𝐎❗]𝚈 𝙻𝙰 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝙸́𝙰?, 𝙴𝚓𝚎𝚖𝚙𝚕𝚘: ${usedPrefix + command} 𝙼𝚒𝚔𝚞`; 
   try { 
     m.reply(global.wait); 
     const res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkeysapi}&query=${text}`); 
     const json = await res.json(); 
     const aa = json.result[0].id; 
     const data = await nhentaiScraper(aa); 
     const pages = []; 
     const thumb = `https://external-content.duckduckgo.com/iu/?u=https://t.nhentai.net/galleries/${data.media_id}/thumb.jpg`; 
     data.images.pages.map((v, i) => { 
       const ext = new URL(v.t).pathname.split('.')[1]; 
       pages.push(`https://external-content.duckduckgo.com/iu/?u=https://i7.nhentai.net/galleries/${data.media_id}/${i + 1}.${ext}`); 
     }); 
     const buffer = await (await fetch(thumb)).buffer(); 
     const jpegThumbnail = await extractImageThumb(buffer); 
     const imagepdf = await toPDF(pages); 
     await conn.sendMessage(m.chat, {document: imagepdf, jpegThumbnail, fileName: data.title.english + '.pdf', mimetype: 'application/pdf'}, {quoted: m}); 
   } catch { 
     throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈 𝙻𝙰 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝙸́𝙰? 𝙴𝚓𝚎𝚖𝚙𝚕𝚘: 𝙼𝚒𝚔𝚞`; 
   } 
 }; 
 handler.command = /^(hentaipdf)$/i; 
 export default handler; 
 async function nhentaiScraper(id) { 
   const uri = id ? `https://cin.guru/v/${+id}/` : 'https://cin.guru/'; 
   const html = (await axios.get(uri)).data; 
   return JSON.parse(html.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]).props.pageProps.data; 
 } 
 function toPDF(images, opt = {}) { 
   return new Promise(async (resolve, reject) => { 
     if (!Array.isArray(images)) images = [images]; 
     const buffs = []; const doc = new PDFDocument({margin: 0, size: 'A4'}); 
     for (let x = 0; x < images.length; x++) { 
       if (/.webp|.gif/.test(images[x])) continue; 
       const data = (await axios.get(images[x], {responseType: 'arraybuffer', ...opt})).data; 
       doc.image(data, 0, 0, {fit: [595.28, 841.89], align: 'center', valign: 'center'}); 
       if (images.length != x + 1) doc.addPage(); 
     } 
     doc.on('data', (chunk) => buffs.push(chunk)); 
     doc.on('end', () => resolve(Buffer.concat(buffs))); 
     doc.on('error', (err) => reject(err)); 
     doc.end(); 
   }); 
 } 
  
  
 /* import fetch from 'node-fetch' 
 let handler = async (m, { conn, text, usedPrefix, command, args }) => { 
 if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '[❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾𝚂, 𝙰𝙲𝚃𝙸𝚅𝙰𝙻𝙾𝚂 𝙲𝙾𝙽.enable nsfw' 
 if (!text) throw `[❗] 𝚈 𝙻𝙰 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝙸𝙰?𝐡, 𝙴𝚓𝚎𝚗𝚙𝚕𝚘: ${usedPrefix + command} 𝙼𝚒𝚔𝚞.` 
 try { 
 m.reply(global.wait) 
 let res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkeysapi}&query=${text}`) 
 let json = await res.json() 
 let aa = json.result[0].id 
 let aa2 = json.result[0].title_native 
 let res2 = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${aa}?apikey=${lolkeysapi}`) 
 let json2 = await res2.json() 
 let aa3 = json2.result 
 await conn.sendMessage(m.chat, { document: { url: aa3 }, mimetype: 'application/pdf', fileName: `${aa2}.pdf` }, { quoted: m }) 
 } catch { 
 throw `[❗] [❗𝐈𝐍𝐅𝐎❗] 𝚈 𝙻𝙰 𝙲𝙰𝚃𝙴𝙶𝙾𝚁𝙸́𝙰? 𝙴𝚓𝚎𝚖𝚙𝚕𝚘: 𝙼𝚒𝚔𝚞` 
 }} 
 handler.command = /^(hentaipdf)$/i 
 export default handler*/