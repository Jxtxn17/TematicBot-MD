//CÓDIGO ADAPTADO POR https://github.com/GataNina-Li | @gata_dios & https://github.com/Undefined17 | @Azami  
  
  
  let menu = `[❗𝐈𝐍𝐅𝐎❗] 𝙌𝙪𝙚 𝙩𝙖𝙡 𝙦𝙪𝙚𝙧𝙞𝙙𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤, 𝙥𝙤𝙧 𝙚𝙡 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙚𝙡` 
  function _0x2daf() { 
      const _0x4c1076 = ['namedoc', 'social', '1017dFLzIP', '11680bWFOeX', 'sendMessage', '1FnTozH', '6qNtNxK', '445374chjKag', '2096504ySppGm', '627669MaFyqj', 'readFileSync', 'En breve se enviará el menú...', '374160lMCurS', '356228pujvOS', './storage/logos/Turbo.jpg', '1019845zOpQQK', 'pdf', 'chat'];  
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
      'fileLength': '99',  
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
