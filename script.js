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
  client.user.setActivity("1.3", { type: "VERSION"}) // this line is kinda just for fun

  const guild = client.guilds.cache.get("851879640120426576");  // tells the bot which server to go to with the server ID
  const channel = guild.channels.cache.get("883445508759257148");  // tell the bot which channel to go to with the channel ID

//   these are here for a bot testing server I created
//   const guild = client.guilds.cache.get("876033885589372948");
//   const channel = guild.channels.cache.get("876033885589372951");


// now this is where the magic happens
client.on("message", async (message) => {
    if (message.content === "!time") {
    
    // this function tells axios to go into the world time API (this lil link below) and get the data
    let getUserTime = async () => { 
        let response = await axios.get("https://worldtimeapi.org/api/timezone/America/New_York")
        let userTime = response.data.datetime; // this line specifies which specific piece of data to grab (this API had more than just time)
        return userTime.slice(11, 16); // this line cuts the string to display only the time. Without it, the output would be "2021-09-12T16:04:34.009381-04:00"
    };

    // this part calls the function from above and sends the message to the channel
    let userTimeValue = await getUserTime(); 
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for Alyna :flag_us:`);


    // rinse and repeat!


    let getUserTimeTwo = async () => {
        let response = await axios.get("http://worldtimeapi.org/api/timezone/Australia/Sydney")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    userTimeValue = await getUserTimeTwo();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for Andreas :flag_au:`);





    let getUserTimeThree = async () => {
        let response = await axios.get("https://worldtimeapi.org/api/timezone/Europe/Paris")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    userTimeValue = await getUserTimeThree();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for Aqua :flag_fr:🤮`);





    let getUserTimeFour = async () => {
        let response = await axios.get("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    userTimeValue = await getUserTimeFour();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for Bethany :flag_us:`);





    let getUserTimeFive = async () => {
        let response = await axios.get("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    userTimeValue = await getUserTimeFive();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for Big Chibi Chan :flag_us:`);





    let getUserTimeSix = async () => {
        let response = await axios.get("https://worldtimeapi.org/api/timezone/America/Chicago")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    userTimeValue = await getUserTimeSix();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for Cychet (the coolest 😎) :flag_us:`);




    let getUserTimeSeven = async () => {
        let response = await axios.get("https://worldtimeapi.org/api/timezone/Asia/Jakarta")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    userTimeValue = await getUserTimeSeven();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for durianpizza :flag_vn:`);




    let getUserTimeEight = async () => {
        let response = await axios.get("https://worldtimeapi.org/api/timezone/Asia/Jakarta")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    userTimeValue = await getUserTimeEight();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for gavi and jadipong :flag_id:`);





    let getUserTimeNine = async () => {
        let response = await axios.get("https://worldtimeapi.org/api/timezone/Europe/Istanbul")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    userTimeValue = await getUserTimeNine();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for Jonetsu (the cutest 😼) :flag_tr:`);





    let getUserTimeTen = async () => {
        let response = await axios.get("https://worldtimeapi.org/api/timezone/America/Chicago")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    userTimeValue = await getUserTimeTen();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for omellettefoot (the second coolest 😎) :flag_us:`);





    let getUserTimeEleven = async () => {
        let response = await axios.get("https://worldtimeapi.org/api/timezone/Europe/Madrid")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    userTimeValue = await getUserTimeEleven();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for YumeSh :flag_es:`);

    channel.send("For any questions or update requests, please ask @Cychet beep boop ^^");
    }
});
});
