import util from 'util'; 
 import path from 'path'; 
 const user = (a) => '@' + a.split('@')[0]; 
 function handler(m, {groupMetadata, command, conn, participants}) { 
   const ps = groupMetadata.participants.map((v) => v.id); 
   const a = ps.getRandom(); 
   const b = ps.getRandom(); 
   const c = ps.getRandom(); 
   const d = ps.getRandom(); 
   const e = ps.getRandom(); 
   const f = ps.getRandom(); 
   const g = ps.getRandom(); 
   const h = ps.getRandom(); 
   const i = ps.getRandom(); 
   const j = ps.getRandom(); 
  
   if (command == 'binprimevideo') { 
     const vn = './media/gay2.mp3'; 
     const top = `*BINS PRIME VÍDEO* 
      
 *_1.- 🌐 BIN PRIME VIDEO

💳| BIN: 43677300713xxxxx
📆| FECHA RND
🌀| CVV: RND
🌏| IP: 🇦🇺 AUSTRALIA

📬| DIRECCIÓN: 
29 Bungan Drive
Ciudad: Stanley Flat
Estado: Australia del Sur
Código postal: 5453
Teléfono: 088364xxxx

🧬| LINK: https://www.amazon.com.au/
 `; 
     m.reply(top, null, {mentions: [a, b, c, d, e, f, g, h, i, j]}); 
     conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m}); 
     // conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true }) 
   } 
  
   if (command == 'topotakus') { 
     const vn = './media/otaku.mp3'; 
     const top = `*🌸 TOP 10 OTAKUS DEL GRUPO 🌸* 
      
 *_1.- ${user(a)}_* 
 *_2.- ${user(b)}_* 
 *_3.- ${user(c)}_* 
 *_4.- ${user(d)}_* 
 *_5.- ${user(e)}_* 
 *_6.- ${user(f)}_* 
 *_7.- ${user(g)}_* 
 *_8.- ${user(h)}_* 
 *_9.- ${user(i)}_* 
 *_10.- ${user(j)}_*`; 
     m.reply(top, null, {mentions: [a, b, c, d, e, f, g, h, i, j]}); 
     conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m}); 
     // conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, { type: 'audioMessage', ptt: true }) 
   } 
 } 
 handler.help = handler.command = ['binprimevideo', 'topotakus']; 
 handler.tags = ['games']; 
 export default handler;
