package com.github.shadowb64.rioru.commands.vanilla.music

import com.github.shadowb64.rioru.commands.AbstractCommand
import com.github.shadowb64.rioru.commands.CommandContext
import com.github.shadowb64.rioru.music.PlayerManager
import java.net.URI

class PlayCommand : AbstractCommand(
    name = "play",
    aliases = listOf("p"),
    verifyIfVoiceChannel = true,
    verifySameChannel = true
) {
    override fun run(context: CommandContext) {
        if(!context.messageEvent.guild.selfMember.voiceState!!.inVoiceChannel()) context.messageEvent.guild.audioManager.openAudioConnection(
            context.messageEvent.member!!.voiceState!!.channel!!)

        if (context.args.isEmpty()) {
            context.messageEvent.channel.sendMessage(context.translate("MusicCommands:$name:argsIsEmpty")).queue()
            return
        }
        var track = java.lang.String.join(" ", context.args)
        if (!isUrl(track)) track = "ytsearch:$track"
        PlayerManager.instance?.loadAndPlay(context, track)
    }

    private fun isUrl(url: String) = try {
        URI(url)
        true
    } catch (e: Exception) {
        false
    }
}