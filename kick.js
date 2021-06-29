const {kicking,changeKicking} = require('./config')

const  kick = async (message, targetId,prefix)=>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	// const args = message.content.slice(prefix.length).trim().split(/ +/);
	// const mention = args.shift().toLowerCase();
  // console.log(mention)
  
  const targetUser = message.guild.members.cache.get(targetId);

  if(!targetUser) {
    message.reply(`target user  not found `);
    return ; 
  }
 

  targetUser.voice.setChannel(null);
  message.channel.send(`${targetUser.displayName} kicked successfully`);

  const vc =message.member.voice.channel 

  if(!vc){
    message.channel.send("you're not in vc so the bot won't listen for connection");
    return; 
  }

  await vc.join();

  message.channel.send(`joined vc and waiting for ${targetUser.displayName} to connect`);
  
  changeKicking(true);
  const interval = setInterval(async()=>{
  
    if(targetUser.voice.channel && kicking[0]){
      console.log(kicking);
      await targetUser.voice.setChannel(null);
      message.channel.send(`successfully kicked ${targetUser.displayName} `)
    }
    if(!kicking[0]){
      clearInterval(interval);
    }
  },1000)
}

module.exports = kick ;