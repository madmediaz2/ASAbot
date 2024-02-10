const { SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong!"),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Api Latency: $(client.ws.ping)\nClient Latency: $(message.createdTimestamp - interaction.createdTimestamp)`

        await interaction.editReply({
            content: newMessage
        });
    }
}