let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.bts`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/bts', {}, 'apikey') },
  caption: `*BTS*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['bts']
handler.tags = ['randomimage']
handler.command = /^(bts)$/i

module.exports = handler
