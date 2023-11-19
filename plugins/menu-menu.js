//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/Undefined17 | @Azami  
  
  
  let text = `[❗𝐈𝐍𝐅𝐎❗] 𝙌𝙪𝙚 𝙩𝙖𝙡 𝙦𝙪𝙚𝙧𝙞𝙙𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤, 𝙥𝙤𝙧 𝙖𝙝𝙤𝙧𝙖 𝙚𝙡 𝙢𝙚𝙣𝙪́ 𝙙𝙚 ${wm} 𝙀𝙨𝙩𝙖 𝙙𝙖𝙣̃𝙖𝙙𝙤, 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙣𝙞𝙧𝙩𝙚 𝙖 𝙣𝙪𝙚𝙨𝙩𝙧𝙤 𝙘𝙖𝙣𝙖𝙡 𝙙𝙤𝙣𝙙𝙚 𝙥𝙤𝙙𝙧𝙖́𝙨 𝙚𝙨𝙩𝙖𝙧 𝙢𝙖́𝙨 𝙖𝙫𝙞𝙨𝙖𝙙𝙤 
${channel}
𝙥𝙤𝙧 𝙡𝙤 𝙩𝙖𝙣𝙩𝙤 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙚𝙡 𝙢𝙚𝙣𝙪́ 𝙪𝙨𝙖 .𝙢𝙚𝙣𝙪𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤.`   
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
