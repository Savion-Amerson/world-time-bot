const axios = require("axios");

const { Client, Intents, Message } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login("ODc2MDMzMzQ3MjgzOTk2NzEy.YReLoQ.QOi4VdPszh2C5K3CkMatPkDbjws");

client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity("1.3", { type: "VERSION"})

//   const guild = client.guilds.cache.get("851879640120426576");
//   const channel = guild.channels.cache.get("883445508759257148");

  const guild = client.guilds.cache.get("876033885589372948");
  const channel = guild.channels.cache.get("876033885589372951");


client.on("message", async (message) => {
    if (message.content === "!time") {
    
    let getUserTime = async () => {
        let response = await axios.get("https://worldtimeapi.org/api/timezone/America/New_York")
        let userTime = response.data.datetime;
        return userTime.slice(11, 16);
    };

    let userTimeValue = await getUserTime();
    console.log(userTimeValue);
    channel.send(`It is currently **${userTimeValue}** for Alyna :flag_us:`);




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
