const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const DiscordLink = 'https://www.youtube.com/@GlaceYT';
        const InstagramLink = 'https://www.instagram.com/krishna__exe_?igsh=Y2U2eWRocjY5MGMy';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Myself Krishna . I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n ❤️ [krishna](${youtubeLink})\n 💙 [GlaceYTT](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

/*

   MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/FUEHs7RCqz
   YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/c4kaW2sSbm ]
*/
