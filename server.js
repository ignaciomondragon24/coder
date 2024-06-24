// server.js
const express = require('express');
const app = express();
const port = 8080;

const handlebars = require("./config/handlebars.config.js");
const serverSocket = require("./config/socket.config.js");

const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
const realtimeproductsRouter = require('./routes/realtimeproducts');
const connectDB = require('./config/mongoose.config');

connectDB();

handlebars(app);

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/realtimeproducts', realtimeproductsRouter);
app.use(express.static('public'));

const httpServer = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


serverSocket.config(httpServer);