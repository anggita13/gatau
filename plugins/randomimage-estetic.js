let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.estetic`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/estetic', {}, 'apikey') },
  caption: `*ESTETIC*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['estetic']
handler.tags = ['randomimage']
handler.command = /^(estetic)$/i

module.exports = handler