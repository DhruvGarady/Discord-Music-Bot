const { SlashCommandBuilder, SlashCommandSubcommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const { execute } = require("./play")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("Skips hte current song."),
    execute: async ({client, interaction}) => {
        
        const queue = client.player.getQueue(interaction.guild);

        if (!queue){
            await interaction.reply("There is no song playing.");
            return;
        }

        const currentSong = queue.current;

        queue.skip();

        await interaction.reply({
            embeds: [
                new MessageEmbed()
                    .setDescription('Skipped',currentSong.title)
                    .setThumbnail(currentSong.setThumbnail)
            ]
        })
    }
}