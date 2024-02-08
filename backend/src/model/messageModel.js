const messages = {};
const channels = initializeChannels();

function initializeChannels() {
  const initialChannels = ['Channel 1', 'Channel 2', 'Channel 3', 'Channel 4', 'Channel 5', 'Channel 6', 'Channel 7', 'Channel 8', 'Channel 9', 'Channel 10'];
  initialChannels.forEach(channel => {
    messages[channel] = [];
  });
  return initialChannels;
}

function getChannels() {
  return channels;
}

function getMessages(channel) {
  return messages[channel] || [];
}

function addMessage(channel, body) {
  if (!messages[channel]) {
    throw new Error('Channel not found');
  }

  const newMessage = { text: body };
  messages[channel].push(newMessage);

  return newMessage;
}

module.exports = {
  getChannels,
  getMessages,
  addMessage,
};
