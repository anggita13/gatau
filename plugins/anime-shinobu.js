let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.shinobu`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/shinobu', {}, 'apikey') },
  caption: `*SHINOBU*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['shinobu']
handler.tags = ['anime']
handler.command = /^(shinobu)$/i


module.exports = handler