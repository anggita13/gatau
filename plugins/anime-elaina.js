let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.elaina`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/elaina', {}, 'apikey') },
  caption: `*ELAINA*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i


module.exports = handler