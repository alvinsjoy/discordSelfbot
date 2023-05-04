const keepAlive = require("./server")
const cleverbot = require("cleverbot-free");
const Discord = require('discord.js-selfbot-v13');
//const EM = require('./ExtendedMessages.js');
const client = new Discord.Client({
  checkUpdate: false, patchVoice: true,
});
//const smartestchatbot = require('smartestchatbot');
//const cb = new smartestchatbot.Client(process.env.CB);
client.on('messageCreate', message => {
  if(message.author.id === "825382504353234954") {
    switch(message.content.toUpperCase()) {
        case '!RESET':
            message.channel.send('Resetting...')
              .then(msg => client.destroy())
              .then(() => client.login(process.env.TOKEN)
              .then(message.channel.send('Reboot Success!')));
            break;
    }
    }
});

client.on('messageCreate', async (message) => {
    /*if (message.content.includes === "!dm") {
        let users = message.content.slice(1).trim().split(" ");
        client.users.fetch(users, false).then((user) => {
 user.send('hello world');
});
    }*/
    if (message.author.id === '1094099312528597013'|| !message.content) {
      return
    }
    else {
      if(message.channel.id === '882568040678559825') {
        try {
          const response = await cleverbot(message.content);
          console.log(message.content)
          message.channel.send(response);
        } 
        catch (err) {
          console.error(err);
        }
        }
    }
});
client.on('ready', () => {
  setInterval(async() => {
  const statuses = ["Discord","Mike's Lounge","Boobs","My big pp","Kids"]
  const status = statuses[Math.floor(Math.random() * statuses.length)]
  const activities = ["WATCHING","LISTENING","STREAMING","PLAYING"]
  const activity = activities[Math.floor(Math.random() * activities.length)]
  /*const stat = ["online","idle","dnd"]
  const sta = stat[Math.floor(Math.random() * stat.length)]
    if (activity === "WATCHING" || "LISTENING") {
      client.user.setStatus(sta)
    }*/
  console.log(client.user,activity,status);
  client.channels.fetch('864093845569667082')
  .then(channel => 
    channel.sendSlash('302050872383242240', 'bump'));
  //client.user.setActivity(status, { type: activity, url: "https://www.twitch.tv/discord"})
}, 5000)
client.channels.fetch('882568040678559825')
  .then(channel => 
    channel.send('Hello!'));
const r = new Discord.SpotifyRPC(client)
    .setAssetsLargeImage("spotify:ab67616d0000b273c7d6fe09dfe4af1580e59705") // Image ID
        .setAssetsSmallImage("spotify:ab67616d0000b2738863bc11d2aa12b54f5aeb36") // Image ID
        .setAssetsLargeText('Achan indo myre?') // Album Name
        .setState('Your mom') // Artists
        .setDetails('I love kids') // Song name
        .setStartTimestamp(Date.now())
        .setEndTimestamp(Date.now() + 1_000 * (60*600 + 56)) // Song length = 2m56s
        .setSongId('4PTG3Z6ehGkBFwjybzWkR8') // Song ID
        .setAlbumId('6eUW0wxWtzkFdaEFsTJto6') // Album ID
        .setArtistIds('0gxyHStUsqpMadRV0Di1Qt') // Artist IDs
client.user.setActivity(r);
});
keepAlive()
client.login(process.env.TOKEN);