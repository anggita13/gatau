let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.cecan`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/cecan', {}, 'apikey') },
  caption: `*CECAN*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['cecan']
handler.tags = ['randomimage']
handler.command = /^(cecan)$/i


module.exports = handler