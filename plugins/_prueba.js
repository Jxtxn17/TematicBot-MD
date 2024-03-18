/*---------------------------------------------------------------------------------------
  😎 • By https://github.com/Jxtxn17
-----------------------------------------------------------------------------------------*/
import db from '../lib/database.js'

let handler = async (m, { conn, text}) => {

let hasil = Math.floor(Math.random() * 5000)

conn.reply(m.chat, `*╭─────◈🗿◈──────╮*

${pickRandom(global.chamba)}

*╰─────◈🗿◈──────╯*`, m, { contextInfo:{ externalAdReply: {title: '🗿 chamba 🗿', body: saludo, sourceUrl: global.paypal, thumbnail: rosas }}})

}
handler.help = ['chamba']
handler.tags = ['frases']
handler.command = ['chamba']
handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

global.piropo = ["*CHAMBEANDO*
Estuviste chambeando Y llegaron 3 negros a violarte.." ]    