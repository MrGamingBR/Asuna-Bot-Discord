package com.github.mrdroox.projects.commands

import com.github.mrdroox.projects.utilities.commands.Command
import com.github.mrdroox.projects.utilities.commands.enumerator.CommandCategory
import com.github.mrdroox.projects.utilities.commands.CommandContext
import com.github.mrdroox.projects.utilities.others.rioruUtils.RioruEmbed

class PingCommand: Command() {
    override var name: String? = "ping"
    override var aliases = listOf("latency", "apiping")
    override var category = CommandCategory.UTILITIES
    override var canDisable = false

    override fun execute(ctx: CommandContext) {
        val time = System.currentTimeMillis()
        val embed = RioruEmbed(ctx.getAuthor())
        embed.setThumbnail(ctx.getJDA().selfUser.effectiveAvatarUrl)
        embed.setDescription("Ping: ${System.currentTimeMillis() - time} ms\nGateway Ping: ${ctx.getJDA().gatewayPing} ms")
        ctx.getChannel().sendMessage(embed.build()).queue()
    }
}