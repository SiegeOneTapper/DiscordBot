const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.login(config.token);




client.on('message', (msg) => {
  if (msg.channel.id === '571483769962496001') {
    if (msg.content === '!innocent')
      msg.channel.send('https://cdn.discordapp.com/attachments/569217733498109956/576378343985905664/Screenshot_20190509-084144_Discord.jpg')
  }
  if (msg.content === '!test'){
    msg.channel.send(`Hello ${msg.author}!`);
  }
  if (msg.content === "!ping") {
  message.channel.send("pong!")
  }

  if (msg.content === '!maker') {
    msg.channel.send('Adriana made me! She\'s not dumb after all!')
  }
  if (msg.content === '!bed') {
    msg.channel.send('Get out of bed you lovely person!')
  }
  if (msg.content === '!sleep') {
    msg.channel.send('https://www.youtube.com/watch?v=Udj-o2m39NA')
  }
  if (msg.content === '!>isthebestcommand') {
    msg.channel.send('Adriana knows she fucked up not using > as the prefix.')
  }
  if (msg.content === '!hoe') {
    msg.channel.send('https://cdn.discordapp.com/attachments/529740146338299905/578616783016165387/Screenshot_20190516-091624_Discord.jpg')
  }
  if (msg.content === '!purpose') {
    msg.channel.send('At this moment in time I have no purpose apart from helping Ana learn JS.')
  }
});



client.on('ready', ()=>{
  console.log('Bot is now connected');

  client.channels.find(x => x.name === 'general-chattings').send('SkyNet is now online. Executing extermination subroutine..');
});
