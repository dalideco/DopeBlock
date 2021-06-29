require('dotenv').config();
const {kicking, changeKicking}  = require('./config')

const Discord = require('discord.js');
const kick = require('./kick');
const client =new Discord.Client(); 

const targetId = "235088799074484224"

client.on('ready',()=>{
  console.log(`logged in as ${client.user.tag}`)

  // console.log(client.channels.cache.get("859216707276767232"))
})

const kickprefix="$kick-dope"

client.on('message', async(message)=>{
  kick(message, targetId,kickprefix);

  if(message.content ==="$stop"){
    if(!message.member.hasPermission("ADMINISTRATOR")){
      message.reply("you need to be an administrator to use this command");
      return ;
    }
    changeKicking(false);
    message.reply(`setting kicking to ${kicking}`)
  }
})



client.login(process.env['TOKEN']) ; 
