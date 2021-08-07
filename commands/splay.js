const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
var { getData, getPreview } = require("spotify-url-info");

var parsed, uri;

const queue = new Map();

module.exports = {
  name: "splay",
  aliases: ["spotifyplay", "playspotify", "spotplay", "sp", "ps"],

  async execute(client, message, args, cmd, Discord, profileData) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.reply(
        "You need to be in a voice channel to use this command."
      );

    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK"))
      return message.reply("You don't have the correct permissins.");

    if (!args.length)
      return message.reply("You need to specify what song you want to play.");
    let song = {};

    if (ytdl.validateURL(args[0])) {
      const songInfo = await ytdl.getInfo(args[0]);
      song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
      };
    } else if (args[0].includes("spotify")) {
      const spotifyTrackInfo = await getPreview(args[0]);

      const videoFinder = async (query) => {
        const videoResult = await ytSearch(query);
        return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
      };

      const video = await videoFinder(
        `${spotifyTrackInfo.title} ${spotifyTrackInfo.artist}`
      );

      if (video) {
        song = { title: video.title, url: video.url };
      } else {
        message.reply("Error finding song.");
      }
    } else {
      const videoFinder = async (query) => {
        const videoResult = await ytSearch(query);
        return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
      };
      const video = await videoFinder(args.join(""));

      if (video) {
        song = { title: video.title, url: video.url };
      } else {
        message.reply("Error finding song.");
      }
    }
  },
};