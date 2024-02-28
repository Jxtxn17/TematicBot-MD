/*---------------------------------------------------------------------------------------
  😎 • By https://github.com/HACHEJOTA
-----------------------------------------------------------------------------------------*/
import db from '../lib/database.js'

let handler = async (m, { conn, text}) => {

let hasil = Math.floor(Math.random() * 5000)

conn.reply(m.chat, `*╭─────◈🌹🗿◈──────╮*

${pickRandom(global.piropo)}

*╰─────◈🗿◈──────╯*`, m, { contextInfo:{ externalAdReply: {title: '🗿 Chamba 🗿', body: saludo, sourceUrl: global.paypal, thumbnail: rosas }}})

}
handler.help = ['chambear']
handler.tags = ['chamba']
handler.command = ['piropo1']
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

global.piropo = [
"*CHAMBEANDO..*, estuviste chambeando y 3 negros se corrieron en tu boca","*CHAMBEANDO..*, estuviste chambeando y llegaron 5 negros s violarte.. (quedaste como una Kardashian:c)"