/*
   * Created By Vraa  Contact Me on wa.me/6283808840711
   * kasihan di enc dek" ke base nya aja  : github.com/DikaArdnt/Hisoka-morou
*/


const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	riykey: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'sanzychan01', // masukin apikey disini *hehe maap om sanzy aku minjem ap apikey nya🗿
}

// Owner
global.owner = ['6283808840711','6283808840711','6283184072215']
global.ownernomer = '6283808840711'
global.premium = ['6283808840711']
global.ownername = 'Vraaa keren'
global.botname = 'kikibot-Md'
global.footer = '© cerator By VraaXzy`s'
global.email = 'selawikwok@gmail.com'
global.ig = 'https://instagram.com/kikollyn'
global.region = 'thailand'

// Keperluan buttons
global.myweb = 'http://www.instagram.com/kikollyn'
global.sc = 'https://chat.whatsapp.com/JOxS05d1WWO529F40SEVEa'
global.grupowner ='https://chat.whatsapp.com/JOxS05d1WWO529F40SEVEa'
// Wm
global.packname = 'Kikibot'
global.author = 'Botnya vraaa keren'

// Thumb & Image random
global.thumb = fs.readFileSync('./image/vraa.jpg')
global.pp_video = fs.readFileSync('./image/vraa.mp4')

/*
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
*/

// Lainnya
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

// Mess wait & Premium
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    endGLimit: 'Limit Harian Game Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitharian = "15"
global.limitgame = "15"
global.limitawal = {
    premium: "Infinity",
    free: 15
}

// Logs update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
