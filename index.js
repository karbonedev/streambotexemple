const Discord = require("discord.js")
const client = new Discord.Client()
const config = require ("./config.json")

let prefix = "?"

client.login(config.token)

client.on ("ready", () => {
     
     const statuses = [
          () => `${client.guilds.cache.size} serveurs !`,
          () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs !`,
          
         
          
     ]
     let i = 0
     setInterval(() => { 

     console.log ("Connected !")
     client.user.setStatus("idle")
     client.user.setActivity(statuses[i](), {type: "STREAMING", url: "https://twitch.tv/karbonetw"})
     i = ++i % statuses.length
}, 1e4)