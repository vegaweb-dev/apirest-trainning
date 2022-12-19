const express = require('express');
const app = express();
const morgan = require('morgan');

//setting port
app.set('port', 3001);

//middlewares
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use(require('./routes/index'));
app.use('/api/gamers', require('./routes/gamers'));
app.use('/api/post', require('./routes/gamers'));

//starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on Port ${app.get('port')}`);
});
