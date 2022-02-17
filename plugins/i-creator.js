const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Misbahul;;;'
                    + 'FN:Misbahhl\n' // full name
                    + 'ORG:Misbahul;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285158514766:+62 851-5851-4766\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Misbahul', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler