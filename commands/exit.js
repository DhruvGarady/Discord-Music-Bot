const { SlashCommandBuilder, SlashCommandSubcommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const { execute } = require("./play")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("exit")
        .setDescription("exit the voice channel."),
    execute: async ({client, interaction}) => {
        
        const queue = client.player.getQueue(interaction.guild);

        if (!queue){
            await interaction.reply("There is no song playing.");
            return;
        }

        queue.destroy();

        await interaction.reply("Why u bully me?")

    }
}