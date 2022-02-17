let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.exo`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/exo', {}, 'apikey') },
  caption: `*EXO*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['exo']
handler.tags = ['randomimage']
handler.command = /^(exo)$/i

handler.exp = 0

module.exports = handler