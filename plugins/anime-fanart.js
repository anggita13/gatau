let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.fanart`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/fanart', {}, 'apikey') },
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['fanart']
handler.tags = ['anime']
handler.command = /^(fanart)$/i


module.exports = handler