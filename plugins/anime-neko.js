let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.neko`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/neko', {}, 'apikey') },
  caption: `*NEKO*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i

module.exports = handler