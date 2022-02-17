let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.megumin`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/megumin', {}, 'apikey') },
  caption: `*MEGUMIN*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i


module.exports = handler