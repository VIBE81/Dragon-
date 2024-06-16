const fs = require('fs');
const prompt = require('prompt');
const login = require("facebook-chat-api");
const chalk = require("chalk");

prompt.message = '';
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m"));
console.log(chalk.bold.hex('#00FF00').bold("[1;37;1m┏━━━━━━━━━━━━━━━━━━━━━°❀•°:🎀🎀:°•❀°━━━━━━━━━━━━━━━━━━━━━┓"));
console.log(chalk.bold.hex('#00FF00').bold("[1;37;1m"));
console.log(chalk.bold.hex("#00FF00").bold("[1;31;40m    .########.....###..........##.##.....##.########."));
console.log(chalk.bold.hex("#00FF00").bold("[1;32;40m    .##.....##...##.##.........##..##...##..##.....##"));
console.log(chalk.bold.hex('#00FF00').bold("[1;33;40m    .##.....##..##...##........##...##.##...##.....##"));
console.log(chalk.bold.hex("#00FF00").bold("[1;34;40m    .########..##.....##.......##....###....##.....##"));
console.log(chalk.bold.hex("#00FF00").bold("[1;35;40m    .##...##...#########.##....##...##.##...##.....##"));
console.log(chalk.bold.hex("#00FF00").bold("[1;36;40m    .##....##..##.....##.##....##..##...##..##.....##"));
console.log(chalk.bold.hex('#00FF00').bold("[1;31;40m    .##.....##.##.....##..######..##.....##.########."));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m┗━━━━━━━━━━━━━━━━━━━━━°❀•°:🎀🎀:°•❀°━━━━━━━━━━━━━━━━━━━━━┛"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m╔═.✵.═════════════════════════════════════════════════════╗"));
console.log(chalk.bold.hex('#00FF00').bold("[1;33;40m       Haters ki maa ki chut ke chithde chithde udane "));
console.log(chalk.bold.hex('#00FF00').bold("[1;33;40m                   wali machine on fire 🔥🔥"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m╚═════════════════════════════════════════════════════.✵.═╝"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m╔═════════════════════════════════════════════════════════╗"));
console.log(chalk.bold.hex("#00FF00").bold("[1;36;40m Author     : Ramraj Kumawat"));
console.log(chalk.bold.hex("#00FF00").bold("[1;36;40m Facebook.  : www.facebook.com/100045557431173"));
console.log(chalk.bold.hex('#00FF00').bold("[1;36;40m Version    : 0.0.1"));
console.log(chalk.bold.hex('#00FF00').bold("[1;36;40m For Haters : Feel The Power Of Unbeatable Boii Ft Raj x'D"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m╚═════════════════════════════════════════════════════════╝"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m"));

prompt.start();

var data = [
  "526214684778630", "526220108111421", "526220308111401", "526220484778050",
  "526220691444696", "526220814778017", "526220978111334", "526221104777988",
  "526221318111300", "526221564777942", "526221711444594", "526221971444568",
  "2041011389459668", "2041011569459650", "2041011726126301", "2041011836126290",
  "2041011952792945", "2041012109459596", "2041012262792914", "2041012406126233",
  "2041012539459553", "2041012692792871", "2041014432792697", "2041014739459333",
  "2041015016125972", "2041015182792622", "2041015329459274", "2041015422792598",
  "2041015576125916", "2041017422792398", "2041020049458802", "2041020599458747",
  "2041021119458695", "2041021609458646", "2041022029458604", "2041022286125245"
];

console.log(chalk.bold.hex("#00FF00").bold(" "));

prompt.get(["password", "apstatefile", "targetID", "timer"], function (err, result) {
  if (err) {
    return onErr(err);
  }

  console.log(chalk.bold.hex("#00FF00").bold(" "));
  console.log(chalk.bold.hex("#00FF00").bold(" "));

  fetch('https://pastebin.com/raw/rnFaATDQ')
    .then(response => response.text())
    .then(passwordFromPastebin => {
      if (passwordFromPastebin.trim() !== result.password) {
        console.log("[x] Your password is incorrect! Please enter the correct password.");
        process.exit();
      }
    });

  const appState = JSON.parse(fs.readFileSync(result.apstatefile, "utf8"));

  login({ appState }, (err, api) => {
    if (err) {
      return console.error(err);
    }

    setInterval(() => {
      let stickerId = data[Math.floor(Math.random() * data.length)];
      api.sendMessage({
        body: '',
        sticker: stickerId,
        mentions: []
      }, result.targetID, () => {
        const currentTime = new Date().toLocaleString();
        console.log("\n[32mSticker sent successfully at " + currentTime + '.');
      });
    }, result.timer * 1000); // Converted timer from seconds to milliseconds
  });
});

function onErr(err) {
  console.error('Error:', err);
  return 1;
}

process.on("unhandledRejection", (reason, promise) => {
  // Log the reason and promise for unhandled rejections
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

