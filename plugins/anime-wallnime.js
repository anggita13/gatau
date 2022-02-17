let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.wallnime`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/wallnime', {}, 'apikey') },
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['wallnime']
handler.tags = ['anime']
handler.command = /^(wallnime)$/i


module.exports = handler