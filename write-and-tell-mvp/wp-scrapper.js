const RedditScraper = require("reddit-scraper");
require('dotenv').config();
const fs = require("fs");
(async () => {
  const redditScraperOptions = {
    AppId: process.env.APP_ID,
    AppSecret: process.env.SECRET,
  };
  // console.log(redditScraperOptions)
  const requestOptions = {
    Pages: 25,
    Records: 25,
    SubReddit: "writingprompts",
    SortType: "hot",
  };

  try {
    const PageScraper = new RedditScraper.RedditScraper(redditScraperOptions);
    const scrapedRawData = await PageScraper.scrapeData(requestOptions);
    // const scrapedData = scrapedRawData.map((element) => {
    //   element
    // })
    const redditFile = await fs.writeFile("./reddit-data.txt", JSON.stringify(scrapedRawData), {flag: "w+"},(err, data) => {
      if (err) throw err;
      console.log(data);
    });
    console.log(redditFile);
    console.log(scrapedData);
  } catch (error) {
    // console.warn(error);
  }
})();



// const redditDataJSON = JSON.parse(redditData)
// const regexForWritingPrompts = /\[WP\](\w+)\<\/h3\>/g;
// const writingprompts = redditDataJSON.data.title;
// console.log(writingprompts);
// console.table(redditData);

