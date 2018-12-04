const SlackBot = require("slackbots");
const axios = require("axios");

const bot = new SlackBot({
  token: "xoxb-482795093232-493132527780-qqvEXcQZgrd3a1iXWL20x7yj",
  name: "spacebot"
});

// Start Handler
bot.on("start", () => {
  const params = {
    icon_emoji: ":space_invader:"
  };

  bot.postMessageToUser(
    "raphael.haupt",
    "Spacebot ready to serve! Give me orders",
    params
  );
});

// Error Handler
bot.on("error", (err) => console.log(err));

// Message Handler
bot.on("message", (data) => {
  if(data.type != "message") {
    return;
  }

  console.log(data)

  handleMessage(data);
});

// Respond to data
function handleMessage(message) {
  // if(message.text.includes(" mission")) {
    const params = {
      icon_emoji: ":space_invader:"
    };

    var mission = "Well hello <@" + message.user + ">, fellow space companion. We're glad you made it all the way into our `communication centre`. We've created this little bot to help you get on board quickly.\n\n*Why?*\nSlack allows all of us to join and follow the events of interest and really share a space of communication before, during, and after the festival. It is a space for specific questions regarding a workshop, last minute changes to the planning, and most importantly to make it easy for you to connect with the other space travellers and stay in touch once this mission has ended.  Most importantly, there are: \n\n*Activity/passivity channels*\nWe have created a respective `channel` for most of our activities. You can find them by _*clicking*_ on `Channels` on the left hand side, where they are ordered by date, then alphabetically according to title.\n\n```Example: You signed up for the Syrian food workshop taking place on Saturday @waldemars_SALON? Click on Channels, find and join the dedicated <#CEH459NV8> channel. Great, now you can share your dietary restrictions or exchange recipes after the event.```\n\n*Main channels:*\n`<#CE6T9HKCH>:` which is where you are right now: ask anything essential that you need to find out right now, or have a general question regarding the workings of this festival.\n`<#CECTLP10E>:` if you are lost in Berlin and need help getting somewhere.\n`<#CE7CM89BM>:` for random shit. If you want to tell everyone something you always wanted to say, but isn't life essential to the survival of or during the festival.\n`<#CEHMS4H8S>:` for a small token of appreciation you can receive answers to the questions and decisions concerning your future, and have your fate revealed once and for all.\n\nEnJoY tHe RiDe, <@" + message.user + ">!";


    bot.postEphemeral(
      "_essential", //id
      message.user, // ??
      mission, // text
      params // icon
    );
  // }
}
