let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.husbu`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/husbu', {}, 'apikey') },
  caption: `*HUSBU*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i


module.exports = handler