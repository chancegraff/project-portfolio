const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('app/build'));
  app.get('*', (req, res) => {
    res.sendFile('app/build/index.html');
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
