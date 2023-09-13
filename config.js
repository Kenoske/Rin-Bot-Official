const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : '918731030752';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://rinmongodb1:robin12032005@cluster0.dudmk3u.mongodb.net/?retryWrites=true&w=majority" ;
global.port= false // Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000  ; 
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'robinaaspirant@gmail.com' ;
global.location = 'Mizoram India' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl = 'https://youtube.com/@KENOSKE_V5.0?si=jbBEkoEJYDd7vk4e' ; // add your username
global.sudo =  process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : '918731030752'; ;
global.devs = "918731030752 //Dont change it From here
global.github  = process.env.YOUR_GITHUB || 'https://github.com/Kenoske/Rin-Bot-Official/tree/main';
global.scan  = process.env.QR_URL || 'https://replit.com/@SuhailTechInfo/Suhail-Md?v=1';
global.website = 'https://github.com/Kenoske/Rin-Bot-Official/tree/main' ; http://wa.me/918731030752
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/NpA3ZsJ.jpeg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || "",      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'ʀɪɴ ʙᴏᴛ ᴏғғɪᴄɪᴀʟ',
  botbgm: process.env.BOT_BGM || 'false',
  ownername:  process.env.OWNER_NAME || `亗•|ʀɪɴ☆᭄`,
  author:  process.env.PACK_AUTHER || '',
  errorChat : process.env.ERROR_CHAT|| '', // put 'chat' here to send error in chat ,where it accures
  read_status : process.env.AUTO_READ_STATUS || 'true',
  save_status : process.env.AUTO_SAVE_STATUS || 'false',
  packname:  process.env.PACK_NAME || "ʀɪɴ ʙᴏᴛ ᴏғғɪᴄɪᴀʟ" ,
  autoreaction: process.env.AUTO_REACTION || 'false',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokeyuntillYouPutAnWordHere',
  alwaysonline: process.env.WAPRESENCE || '', // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  antifake : 'null', // process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  readcmds : process.env.READ_COMMANDS || 'true',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink_values: process.env.ANTILINK_VALUES || 'https://chat.whatsapp.com',
  //antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  caption :process.env.CAPTION || "•𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚁𝙸𝙽 𝙱𝙾𝚃 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻",   //*『•𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚁𝙸𝙽 𝙱𝙾𝚃 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻』*\n https://youtube.com/@KENOSKE_V5.0?si=jbBEkoEJYDd7vk4e"),
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.1.5.0',
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : 'SUHAIL',
  menu : process.env.MENU || 'Schemes', /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'public',
  KOYEB_API : process.env.KOYEB_API || ''
};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
