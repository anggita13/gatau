let fs = require('fs')

global.owner = ['6285158514766']
global.mods = []
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = {
  
  lol: 'https://api.lolhuman.xyz'
  
}
global.APIKeys = {
  
  'https://api.lolhuman.xyz': 'sobatnasbung'
}

 
 const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'LilianaBOT-Md'
  var sticker_author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.stiker_wait = 'Stiker sedang dibuat'
global.packname = sticker_name
global.author = sticker_author
global.email = 'mmisbahul0202@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = '© LilianaBOT-Md'
global.media = 'https://r7.pngwing.com/path/322/725/287/node-js-javascript-npm-express-js-sharp-a24456102735a7514d5c01d43933ee18.png'

global.wait = 'Mohon tunggu sebentar~'
global.eror = 'Terjadi kesalahan'

global.multiplier = 69

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
