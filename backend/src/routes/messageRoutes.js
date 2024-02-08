const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const messageModel = require('../model/messageModel');

router.get('/channels', ( _,res) => {
  const channels = messageModel.getChannels();
  res.send(channels);
});

router.get('/messages/:channel', (req, res) => {
  const channel = req.params.channel;
  const channelMessages = messageController.getMessages(channel);
  res.send(channelMessages);
});

router.post('/:channel', (req, res) => {
  const channel = req.params.channel;
  const { body } = req.body;

  try {
    const newMessage = messageController.addMessage(channel, body);
    res.json(newMessage);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
