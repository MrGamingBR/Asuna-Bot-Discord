const Command = require('../../Util/Command');

module.exports = class WorkCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'work',
            aliases: ['trabalhar'],
            description: 'Hora de trabalhar',
            category: 'Economy'
        })
    }
    run(message, args, t) {
        message.channel.send('Em produção....')
    }
}