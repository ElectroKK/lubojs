var Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: true
  }
})

module.exports = {
  name: 'image',
  aliases: ['im', 'ima', 'img', 'images', 'pic', 'picture', 'picsearch'],
  description: 'this sends an image',
  async execute(client, message, args, cmd, Discord, profileData){
    const image_query = args.join(' ');
    if(!image_query) return message.channel.send('Please send a valid image name');

    const image_results = await google.scrape(image_query, 1);
    message.channel.send(image_results[0].url);

  }
}