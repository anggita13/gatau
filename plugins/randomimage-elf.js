let handler = async (m, { conn, usedPrefix, command }) => {

let buttons = [
  {buttonId: `.elf`, buttonText: {displayText: 'Next' }, type: 1 }]

let buttonMessage = {
  image: { url: global.API('lol', '/api/random/exo', {}, 'apikey') },
  caption: `*ELF*`,
  buttons: buttons,
}
await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['elf']
handler.tags = ['randomimage']
handler.command = /^(elf)$/i


module.exports = handler