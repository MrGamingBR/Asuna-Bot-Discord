const Command = require('../../Util/Command');

module.exports = class QueueCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'queue',
            aliases: ['q'],
            description: 'Mostra a atual Lista de Reprodução no Servidor',
            category: 'Music'
        })
    }
    run(message, args, t) {
        const { MessageEmbed } = require('discord.js')
        const player = this.client.music.players.get(message.guild.id);
    if (!player) return message.reply(t('errors:MusicCommand.QueueCommand.NotPlayer', { error: emj.error }));

    const queue = player.queue;
    const embed = new MessageEmbed().setAuthor(t('commands:MusicCommand.PlayCommand.ListReprodution', { guildName: message.guild.name }), message.guild.iconURL({dynamic:true}));

    const multiple = 10;
    const page = args.length && Number(args[0]) ? Number(args[0]) : 1;

    const end = page * multiple;
    const start = end - multiple;

    const tracks = queue.slice(start, end);

    if (queue.current) embed.addField(t('commands:MusicCommand.PlayCommand.CurrentMusic', { MusicTitle: queue.current.title, MusicURL: queue.current.uri, sucess: emj.sucess }));

    else embed.setDescription(tracks.map((track, i) => `${start + (++i)} - [${track.title}](${track.uri})`).join("\n"));

    const maxPages = Math.ceil(queue.length / multiple);

    embed.setFooter(`Page ${page > maxPages ? maxPages : page} of ${maxPages}`);

    return message.reply(embed);
    }
}