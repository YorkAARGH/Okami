const { CustomError } = require(`${process.cwd()}/util/CustomError.js`);
const Event = require(`${process.cwd()}/base/Event.js`);

module.exports = class extends Event {

  async run(error, message) {
    if (error instanceof CustomError) {
      if (error.msg) {
        return error.msg.edit(error.message);
      } else { 
        return message.channel.send(error.message);
      }
    }
    message.channel.send("Something went wrong, please try again later");
    this.client.logger.error(error);
  }
};
