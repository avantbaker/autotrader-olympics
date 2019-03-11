const http = require('http');
const app = require('./index');
const applyMiddleware = require('./middlewares/index');
const { connectDB } = require('./models/index');
const logger = require('./utils/logger');

const port = parseInt(process.env.PORT, 10) || 8000;

app.set('port', port);

applyMiddleware(app);

const server = http.createServer(app);

server.listen(port, (err) => {
    if(err) {
        process.exit(1)
    }
    connectDB();
    logger.info(`API is up and running on ${port}!`);
});