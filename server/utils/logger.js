const winston = require('winston');
const { combine, colorize, timestamp, prettyPrint, printf } = winston.format;
const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    db: 4,
    debug: 5
  },
  colors: {
    error: 'red',
    warn: 'darkred',
    info: 'green',
    db: 'blue',
    debug: 'yellow'
  }
};

// instantiate a new Winston Logger
const logger = winston.createLogger({
  format: combine(
    colorize(),
    timestamp(),
    prettyPrint(),
    printf(info => {
      const { timestamp, level, message, ...args } = info;

      const ts = timestamp.slice(0, 19).replace('T', ' ');
      return `${ts} [${level}]: ${message} ${
        Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
      }`;
    })
  ),
  transports: [new winston.transports.Console(logLevels)]
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message) {
    // use the 'info' log level so the output will be picked up by the transport
    logger.info(message);
  }
};

module.exports = logger;
