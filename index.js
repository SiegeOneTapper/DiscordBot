const Discord = require('discord.js');
const token = 'NTgxMDkyMDk4NTAyMDMzNDA4.XOaOag.ha0qg86SZA1CGPrU1RF8EMX40qY';

const client = new Discord.Client();
client.on('message', (msg) => {
  if (msg.content === '!test'){
    msg.channel.send(`Hello ${msg.author}!`);
  }

  if (msg.content === '!maker') {
    msg.channel.send('Adriana made me! She\'s not dumb after all!')
  }
  if (msg.content === '!bed') {
    msg.channel.send('Get out of bed you lovely person!')
  }
  if (msg.content === '!>isthebestcommand') {
    msg.channel.send('Adriana knows she fucked up not using > as the prefix.')
  }
  if (msg.content === ' Innocent') {
    msg.channel.send('https://cdn.discordapp.com/attachments/569217733498109956/576378343985905664/Screenshot_20190509-084144_Discord.jpg')
  }
  if (msg.content === 'Hoe') {
    msg.channel.send('  https://cdn.discordapp.com/attachments/529740146338299905/578616783016165387/Screenshot_20190516-091624_Discord.jpg')
  }
});

client.on('ready', ()=>{
  console.log('Bot is now connected');

  //client.channels.find(x => x.name === 'general-chattings').send('Hello! I\'m now connected!');
});

client.login(token);
