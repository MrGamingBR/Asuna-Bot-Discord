const Command = require('../../Util/Command');

module.exports = class AddZoeinsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'addzoeins',
            aliases: [],
            category: 'Developer',
            onlyDevs: true
        })
    }
    run(message, args, t) {
        console.log('a')
    }
}