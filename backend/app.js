const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const messageRoutes = require('./src/routes/messageRoutes');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/', messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
