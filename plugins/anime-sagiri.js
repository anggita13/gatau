let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.sagiri`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/sagiri', {}, 'apikey') },
  caption: `*SAGIRI*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^(sagiri)$/i


module.exports = handler