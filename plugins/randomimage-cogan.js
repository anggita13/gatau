let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.cogan`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/cogan', {}, 'apikey') },
  caption: `*COGAN*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['cegan']
handler.tags = ['randomimage']
handler.command = /^(cogan)$/i

module.exports = handler