const { SlashCommandBuilder, SlashCommandSubcommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const { execute } = require("./play")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("resume")
        .setDescription("Resume the current song."),
    execute: async ({client, interaction}) => {
        
        const queue = client.player.getQueue(interaction.guild);

        if (!queue){
            await interaction.reply("There is no song playing.");
            return;
        }

        queue.setPaused(false);

        await interaction.reply("Song Resumeed")

    }
}