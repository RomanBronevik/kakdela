let winston = require('winston');
const ENV = process.env.NODE_ENV || 'development';

function getLogger () {
    return winston.createLogger({
        level: (ENV === 'development') ? 'debug' : 'error',
        format: winston.format.json(),
        transports: [
            //
            // - Write to all logs with level `info` and below to `debug.log`
            // - Write all logs error (and below) to `error.log`.
            //
            new winston.transports.File({ filename: 'var/logs/error.log', level: 'error' }),
            new winston.transports.File({ filename: 'var/logs/debug.log' })
        ]
    });
}

module.exports = getLogger();