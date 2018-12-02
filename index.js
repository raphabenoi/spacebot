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

  bot.postMessageToChannel(
    "_essential",
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

  handleMessage(data);
});

// Respond to data
function handleMessage(message) {
  if(message.text.includes(" mission")) {
    const params = {
      icon_emoji: ":space_invader:"
    };

    var mission = "Well hello <@" + message.user + "> fellow space companion. We're glad you made it all the way into our `communication centre`. We've created this little bot to help you get on board quickly.\n \nWe have created a respective `channel` for most of our activities.\n_*Why?*_ To create a space for specific questions regarding a workshop, late minute changes to the planning, and most importantly to make it easy for you to connect with the other space travellers and stay in touch once this mission has ended.\n \nYou joined the `Syrian food workshop` taking place on Saturday @waldemars_SALON? Then _*click*_ on `Channels` on the left hand side and find the <#CEH459NV8> channel. As you can see, we ordered them by date hoping to bring a little bit of structure into this interplanetary chaos."

    bot.postEphemeral(
      "_essential", //id
      message.user, // ??
      mission, // text
      params // icon
    );
  }
}
