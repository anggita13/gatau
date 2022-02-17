let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.nsfwaifu`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/nsfw/waifu', {}, 'apikey') },
  caption: `*NSFW WAIFU*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['nsfwaifu']
handler.tags = ['nsfw']
handler.command = /^(nsfwaifu)$/i


module.exports = handler