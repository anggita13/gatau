let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.nsfwtrap`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/nsfw/trap', {}, 'apikey') },
  caption: `*NSFW TRAP*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['nsfwtrap']
handler.tags = ['nsfw']
handler.command = /^(nsfwtrap)$/i


module.exports = handler