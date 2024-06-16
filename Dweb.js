const fs = require('fs');
const prompt = require("prompt");
const login = require("facebook-chat-api");
const chalk = require("chalk");

prompt.message = '';
console.log(chalk.bold.hex('#00FF00').bold("[1;37;1m"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m┏━━━━━━━━━━━━━━━━━━━━━°❀•°:🎀🎀:°•❀°━━━━━━━━━━━━━━━━━━━━━┓"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m"));
console.log(chalk.bold.hex("#00FF00").bold("[1;31;40m    .########.....###..........##.##.....##.########."));
console.log(chalk.bold.hex("#00FF00").bold("[1;32;40m    .##.....##...##.##.........##..##...##..##.....##"));
console.log(chalk.bold.hex('#00FF00').bold("[1;33;40m    .##.....##..##...##........##...##.##...##.....##"));
console.log(chalk.bold.hex("#00FF00").bold("[1;34;40m    .########..##.....##.......##....###....##.....##"));
console.log(chalk.bold.hex("#00FF00").bold("[1;35;40m    .##...##...#########.##....##...##.##...##.....##"));
console.log(chalk.bold.hex("#00FF00").bold("[1;36;40m    .##....##..##.....##.##....##..##...##..##.....##"));
console.log(chalk.bold.hex("#00FF00").bold("[1;31;40m    .##.....##.##.....##..######..##.....##.########."));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m"));
console.log(chalk.bold.hex('#00FF00').bold("[1;37;1m┗━━━━━━━━━━━━━━━━━━━━━°❀•°:🎀🎀:°•❀°━━━━━━━━━━━━━━━━━━━━━┛"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m╔═.✵.═════════════════════════════════════════════════════╗"));
console.log(chalk.bold.hex('#00FF00').bold("[1;33;40m       Haters ki maa ki chut ke chithde chithde udane "));
console.log(chalk.bold.hex("#00FF00").bold("[1;33;40m                   wali machine on fire 🔥🔥"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m╚═════════════════════════════════════════════════════.✵.═╝"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m╔═════════════════════════════════════════════════════════╗"));
console.log(chalk.bold.hex("#00FF00").bold("[1;36;40m Author     : Ramraj Kumawat"));
console.log(chalk.bold.hex("#00FF00").bold("[1;36;40m Facebook.  : www.facebook.com/100045557431173"));
console.log(chalk.bold.hex("#00FF00").bold("[1;36;40m Version    : 0.0.1"));
console.log(chalk.bold.hex('#00FF00').bold("[1;36;40m For Haters : Feel The Power Of Unbeatable Boii Ft Raj x'D"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m╚═════════════════════════════════════════════════════════╝"));
console.log(chalk.bold.hex("#00FF00").bold("[1;37;1m"));

prompt.start();
console.log(chalk.bold.hex("#00FF00").bold(" "));

prompt.get(["password", "apstatefile", "targetID", "timer", "hatersname", "abusingfile"], function (err, result) {
  if (err) {
    return onErr(err);
  }

  fetch("https://pastebin.com/raw/rnFaATDQ")
    .then(response => response.text())
    .then(passwordFromPastebin => {
      if (passwordFromPastebin.trim() !== result.password) {
        console.log("[x] Your password is incorrect! Please enter the correct password.");
        process.exit();
      }
    });

  const appState = JSON.parse(fs.readFileSync(result.apstatefile, "utf8"));
  const abusingLines = fs.readFileSync(result.abusingfile, 'utf8').split("\n");
  let abusingIndex = 0;

  login({ appState }, (err, api) => {
    if (err) {
      return console.error(err);
    }

    setInterval(() => {
      const abuseMessage = abusingLines[abusingIndex].trim();
      const messageToSend = result.hatersname + " " + abuseMessage;

      api.sendMessage(messageToSend, result.targetID, () => {
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleString("en-IN", {
          timeZone: 'Asia/Kolkata',
          hour12: true
        });

        console.log(chalk.bold.hex("#00FF00").bold(" "));
        console.log(chalk.bold.hex("#00FF00").bold(" "));
        console.log(chalk.bold.hex('#00FF00').bold(`>> Your Convo/Ib Uid  :: ${result.targetID}  Date & Time :: ${formattedTime}`));
        console.log(chalk.bold.hex('#00FF00').bold(`>> Successfully Sent Your Message :: ${result.hatersname} ${abuseMessage}\n`));

        abusingIndex = (abusingIndex + 1) % abusingLines.length;
      });
    }, result.timer * 1000);
  });
});

function onErr(err) {
  console.log(err);
  return 1;
}

process.on("unhandledRejection", (reason, promise) => {
  // Log the reason and promise for unhandled rejections
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

