//Créditos a @Danieldiod

import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*🚫 𝐄𝐑𝐑𝐎𝐑 🚫*\n\ᥙs᥆ ძᥱᥣ ᥴ᥆mᥲᥒძ᥆ ᥴ᥆rrᥱᥴ𝗍᥆:\n\n${usedPrefix + command} edits de mia kalifa`;;
  const res = await fetch(`https://api.ikyy.my.id/tiktoksearch?text=${text}`);        
  const data = await res.json();
  const json = data.result[0];
  await conn.sendFile(m.chat, json.play, 'tiktok.mp4', `
*T I K T O K  - S E A R C H*

*Titulo 📋:* ${json.title}
`, m);
  await conn.sendFile(m.chat, json.music, 'error.mp3', null, m, true);
};

handler.help = ['tiktoksearch'];
handler.command = /^(tiktoksearch|ttsearch|tiktoks|ttsr)$/i;
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

export default handler;