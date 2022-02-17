let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.nsfwneko`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/nsfw/neko', {}, 'apikey') },
  caption: `*NSFW NEKO*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^(nsfwneko)$/i


module.exports = handler