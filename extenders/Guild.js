const { Structures } = require("discord.js");

module.exports = Structures.extend("Guild", Guild => {
  return class extends Guild {
    get store() {
      return this.client.store.findAll("guildId", this.id);
    }
  };
});