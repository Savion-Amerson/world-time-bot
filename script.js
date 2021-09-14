// some imports
const axios = require("axios");
require("dotenv").config();
const { Client, Intents } = require("discord.js");


// this part logs the bot into discord
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(`${process.env.TOKEN}`);

client.once("ready", () => {
  console.log("Ready!"); // this is here to tell me if the bot is online or not
  client.user.setActivity("1.4", { type: "VERSION"}) // this line is kinda just for fun

  const guild = client.guilds.cache.get("851879640120426576");  // tells the bot which server to go to with the server ID
  const channel = guild.channels.cache.get("883445508759257148");  // tell the bot which channel to go to with the channel ID

//   these are here for a bot testing server I created
//   const guild = client.guilds.cache.get("876033885589372948");
//   const channel = guild.channels.cache.get("876033885589372951");


// now this is where the magic happens
client.on("message", async (message) => {
    if (message.content === "!time") {
    
    // this function tells axios to go into the world time API (the lil worldtimeapi link below) and get the data
    
    let getUserTime = async (timezone, username) => { 
        let response = await axios.get(`https://worldtimeapi.org/api/timezone/${timezone}`)
        let userTime = response.data.datetime; // this line specifies which specific piece of data to grab (this API has more than just time) and cuts the string to display only the time. Without it, the output would be "2021-09-12T16:04:34.009381-04:00"
        let userTimeValue = userTime.slice(11, 16)

        channel.send(`It is currently **${userTimeValue}** for ${username}`); //sends the message to the channel
        console.log(`It is currently **${userTimeValue}** for ${username}`);
    };

    // this part calls the function from above and 
    getUserTime("America/New_York", "Alyna :flag_us:"); 
    
    // rinse and repeat!
    getUserTime("Australia/Sydney", "Andreas :flag_au:"); 
    getUserTime("Europe/Paris", "Aqua :flag_fr:🤮"); 
    getUserTime("America/Los_Angeles", "Bethany :flag_us:"); 
    getUserTime("America/Los_Angeles", "Big Chibi Chan :flag_us:"); 
    getUserTime("America/Chicago", "Cychet (the coolest 😎) :flag_us:"); 
    getUserTime("America/New_York", "durianpizza :flag_vn:"); 
    getUserTime("Asia/Jakarta", "gavi and jadipong :flag_id:"); 
    getUserTime("Europe/Istanbul", "Jonetsu (the cutest 😼) :flag_tr:"); 
    getUserTime("America/Chicago", "omellettefoot (the second coolest 😎) :flag_us:"); 
    getUserTime("Europe/Madrid", "YumeSh :flag_es:"); 

    setTimeout(() => {
        channel.send("For any questions or update requests, please ask @Cychet beep boop ^^");
    }, 18000);
    }
});
});