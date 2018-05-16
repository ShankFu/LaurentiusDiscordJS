
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on("ready", () => {
	//Bot actions on start
  console.log(`Bot running`);
  client.user.setActivity(`Connected to ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
	//Bot actions on joining a new server
  console.log(`Connected to new server: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Connected to ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
	//Bot actions on being kicked from a server
  console.log(`Removed from server ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Connected to ${client.guilds.size} servers`);
});

client.on("message", async message => {
		//On message recieved in text channel...
		//Passive commands
	if(message.author.client) return;
		//Ignores self
	if(message.content === "Hello Laurentius" || message.content === "Hey Laurentius" || message.content === "Hello" || message.content === "Hey") {
		message.channel.reply("Oh, hello, there. I am pleased to see you safe.");
	}
		//Replies to set message strings
	if(message.author.role.name === "tre role" || message.author.role.name === "tre tre role") {
		message.delete()
		console.log(`Deleted message from unauthorized role`);
	}
});

client.on("message", async message => {
	if(message.author.client) return;
	if(message.content.indexOf(config.prefix) !==0) return;
		//For bot actions tied to user commands
		//Ignores commands not starting with prefix variable in config.json
});
