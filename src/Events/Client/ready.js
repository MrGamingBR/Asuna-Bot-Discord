const { ZoePlayer } = require('../../Util')
const chalk = require('chalk')

module.exports = class ReadyEvent {
    constructor(client) {
        this.client = client
    }

    run() {
        console.log("Já propagou até o ready")
        
       var status = [
        `😉 Tenho Custom Prefix, Me mencione para saber mais!`,
        `😛 Sabia que tenho um Sistema de Música ?`,
        `😢 Estou Hospedada na Digital Ocean mais é caro demais, Me ajude por favor...`,
        `😎 Sabia que eu sou open-source? https://github.com/MrGamingBR/Zoe`
        ],
     i = 0
     setInterval(() => this.client.user.setActivity(`${status[i++ % status.length]}`, {
      type: "STREAMING",
      url: "https://www.twitch.tv/zoebot"
      }), 7000)
  
    this.client.music.init(this.client.user.id)

     console.log(`
      ${chalk.rgb(0, 255, 255).bold(this.client.user.tag)} ${chalk.rgb(0, 26, 255).bold("start's with:")}
      ${chalk.rgb(0, 255, 255).bold(this.client.users.cache.size)} ${chalk.rgb(0, 26, 255).bold('Users')},
      ${chalk.rgb(0, 255, 255).bold(this.client.guilds.cache.size)} ${chalk.rgb(0, 26, 255).bold('Servers and')}
      ${chalk.rgb(0, 255, 255).bold(this.client.commands.size)} ${chalk.rgb(0, 26, 255).bold('Commands')}.`)
      
      setInterval(() => {
          this.client.channels.cache.get('767596655628779520').setName(`Guilds: ${this.client.guilds.cache.size}`)
          this.client.channels.cache.get('767596719331737610').setName(`Users: ${this.client.users.cache.size}`)
      }, 1000 * 60 * 10)
    }
}
