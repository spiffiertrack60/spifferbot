const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`Bot Foi Iniciado, Com ${client.users.size} Usuários, Em ${client.channels.size} Canais, Em ${client.guilds.size} Servidores!`); 
  client.user.setActivity(`Com ${client.guilds.size} Servidores!`);
});

client.on("guildCreate", guild => {
  console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`Com ${client.guilds.size} Servidores!`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Com ${client.guilds.size} Servidores!`);
});


client.on("message", async message => {

    
});

client.login("NTU2NDc2MjQ4NjI5NTc1Njgw.D27fxw.PVs3ezxPQg1iY_zTuKFFxYpKqcs");