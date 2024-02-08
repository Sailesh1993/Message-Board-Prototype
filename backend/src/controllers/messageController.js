const messageModel = require('../model/messageModel');

function getMessages(channel) {
  return messageModel.getMessages(channel);
}

function addMessage(channel, body) {
  return messageModel.addMessage(channel, body);
}

module.exports = {
  getMessages,
  addMessage,
};
