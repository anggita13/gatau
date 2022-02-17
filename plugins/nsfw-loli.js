let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.nsfwloli`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/loli', {}, 'apikey') },
  caption: `*NSFW LOLI*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['nsfwloli']
handler.tags = ['nsfw']
handler.command = /^(nsfwloli)$/i


module.exports = handler