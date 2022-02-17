let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.kanna`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/kanna', {}, 'apikey') },
  caption: `*KANNA*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['kanna']
handler.tags = ['anime']
handler.command = /^(kanna)$/i


module.exports = handler