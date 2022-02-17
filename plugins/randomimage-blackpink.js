let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.blackpink`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/blackpink', {}, 'apikey') },
  caption: `*BLACKPINK*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['blackpink']
handler.tags = ['randomimage']
handler.command = /^(blackpink)$/i


module.exports = handler