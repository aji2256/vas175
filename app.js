const Discord = require("discord.js");

const client = new Discord.Client();

client.on( "ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
// check  for new message
client.on("message",msg => {
    
if (msg.content === "!hello"){
    msg.reply("Hi, Dr.Bot at your service. How can I help you?");
}
// help command
else if (msg.content === "!help"){
    msg.reply("Hey there ,how can I help you ? please use these command words --[about getting the vaccine]---,--[how to register the vaccine slot ]--,---[health info]--,---[nearest loctions to get vaccinated]--,---[covid symptoms]--")
}
if (msg.content === "Covid symptoms"){
    msg.reply("Most common symptoms *fever  *dry cough  *tiredness  *Less common symptoms: *aches and pains");
}
});

