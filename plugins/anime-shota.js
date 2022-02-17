let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.shota`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/shota', {}, 'apikey') },
  caption: `*SHOTA*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['shota']
handler.tags = ['anime']
handler.command = /^(shota)$/i


module.exports = handler