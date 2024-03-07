import TicTacToe from '../lib/tictactoe.js'

var handler = async (m, { conn, usedPrefix, command, text }) => {

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `[❗𝐈𝐍𝐅𝐎❗] *TODAVÍA ESTAS EN UN JUEGO, ESCRIBE ${usedPrefix}delttt PARA CERRAR EL JUEGO*`
if (!text) throw `[❗𝐈𝐍𝐅𝐎❗] *PONGA UN NOMBRE A LA SALA*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('*✅ COMPAÑERO ENCONTRADO*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Esperando a @${room.game.currentTurn.split('@')[0]} como primer jugador

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}       

*SALA ID* ${room.id}

[❗𝐈𝐍𝐅𝐎❗] *REGLAS*

Haz 3 filas de símbolos verticales, horizontales o diagonales para ganar
Escribe *surrender* para salir del juego y ser declarado derrotado.`.trim()
if (room.x !== room.o) await conn.reply(room.x, str, m, {
mentions: conn.parseMention(str)
})
await conn.reply(room.o, str, m, {
mentions: conn.parseMention(str)
})
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
        
conn.reply(m.chat, `*Esperando pareja*\n\nEscriba el siguiente comando para aceptar\n*${usedPrefix + command} ${text}*\n\n🎁 Recompensa: *4999 XP*`, m, {
mentions: conn.parseMention(text)
})
        
conn.game[room.id] = room
}

}
handler.help = ['tictactoe']
handler.tags = ['juegos']
handler.command = ['tictactoe', 'ttc', 'ttt', 'xo']
handler.register = true

export default handler
