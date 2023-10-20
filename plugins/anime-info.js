import fetch from 'node-fetch'
  
var handler = async (m, { conn, text }) => {
 
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝘼𝙇𝙂𝙐́𝙉 𝘼𝙉𝙄𝙈𝙀*`
let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text)
if (!res.ok) throw '*⚠️ 𝙀𝙍𝙍𝙊𝙍*'
let json = await res.json()
let { chapters, title_japanese, url, type, score, members, background, status, volumes, synopsis, favorites } = json.data[0]
let author = json.data[0].authors[0].name
let animeingfo = `📚 Título: ${title_japanese}
📑 Capítulo: ${chapters}
✉️ Transmisión: ${type}
🗂 Estado: ${status}
🗃 Volumes: ${volumes}
🌟 Favorito: ${favorites}
🧮 Puntaje: ${score}
👥 Miembros: ${members}
⛓️ Url: ${url}
👨‍🔬 Autor: ${author}
📝 Fondo: ${background}
💬 Sinopsis: ${synopsis}
 ` 
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'anjime.jpg', `\t\t\t\t\t*メー ANIME INFO ーメ*\n` + animeingfo, fkontak, m)

} 
handler.help = ['animeinfo'] 
handler.tags = ['anime'] 
handler.command = /^(animeinfo)$/i 
 
export default handler