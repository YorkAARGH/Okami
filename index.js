require(`${process.cwd()}/modules/Prototypes.js`);
require(`${process.cwd()}/extenders/Message.js`);
require(`${process.cwd()}/extenders/GuildMember.js`);
require(`${process.cwd()}/extenders/Guild.js`);
require(`${process.cwd()}/extenders/DMChannel.js`);
require(`${process.cwd()}/extenders/TextChannel.js`);
const MisakiClient = require(`${process.cwd()}/structures/MisakiClient.js`);

const client = new MisakiClient({
  disabledEvents: [
    "CHANNEL_PINS_UPDATE",
    "GUILD_BAN_ADD",
    "GUILD_BAN_REMOVE",
    "GUILD_SYNC",
    "RELATIONSHIP_ADD",
    "RELATIONSHIP_REMOVE",
    "TYPING_START",
    "USER_NOTE_UPDATE",
    "USER_SETTINGS_UPDATE",
    "VOICE_SERVER_UPDATE",
    "VOICE_STATE_UPDATE"],
  disableEveryone: true,
  messageCacheMaxSize: 100,
  messageCacheLifetime: 240,
  messageSweepInterval: 300
});

client.login(client.config.token);

client.on("disconnect", () => client.logger.warn("Bot is disconnecting..."))
  .on("reconnect", () => client.logger.log("Bot reconnecting...", "log"))
  .on("error", err => client.logger.error(err))
  .on("warn", info => client.logger.warn(info));

process.on("uncaughtException", err => {
  const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
  client.logger.error(`Uncaught Exception: ${errorMsg}`);
  process.exit(1);
});

process.on("unhandledRejection", err => console.log(err));
