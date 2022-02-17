let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.waifu`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/waifu', {}, 'apikey') },
  caption: `*WAIFU*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i


module.exports = handler