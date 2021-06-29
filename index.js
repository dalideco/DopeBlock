const Discord = require('discord.js')
const client =new Discord.Client(); 

client.on('ready',()=>{
  console.log(`logged in as ${client.user.tag}`)

  // console.log(client.channels.cache.get("859216707276767232"))
})

const prefix="$kick-dope"

client.on('message', message=>{
  if (!message.content.startsWith(prefix) || message.author.bot) return;

	// const args = message.content.slice(prefix.length).trim().split(/ +/);
	// const mention = args.shift().toLowerCase();
  // console.log(mention)
  

  const taggedUser = message.mentions.users.first();
  if(taggedUser){
    const user = message.guild.members.cache.get(taggedUser.id)
    console.log(user);
    user.voice.setChannel(null);
    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
  }
	else{
    message.reply("you need to tage a user ")
  }
})




client.login(process.env['TOKEN']) ; 
