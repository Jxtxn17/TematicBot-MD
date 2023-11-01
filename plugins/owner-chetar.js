const handler = async (m, { conn }) => { 
     const user = global.db.data.users[m.sender]; 
         conn.sendMessage(m.chat, {text: `[🍬] @${m.sender.split('@')[0]} 𝙈𝙞 𝙘𝙧𝙚𝙖𝙙𝙤𝙧, 𝙮𝙖 𝙣𝙤 𝙩𝙚𝙣𝙙𝙧𝙖𝙨 𝙡𝙞𝙢𝙞𝙩𝙚𝙨..`, mentions: [m.sender]}, {quoted: m}); 
       global.db.data.users[m.sender].money = Infinity; 
     global.db.data.users[m.sender].limit = Infinity; 
   global.db.data.users[m.sender].level = Infinity; 
  global.db.data.users[m.sender].exp = Infinity; 
 }; 
 handler.help = ['cheat']; 
 handler.tags = ['owner']; 
 handler.command = /^(infinito|chetar)$/i; 
 handler.rowner = true; 
 handler.fail = null; 
 export default handler;
