const winston = require('winston');

function getLogger(module) {
    const path = module.filename
        .split('/')
        .slice(-2)
        .join('/');

    const logger = winston.createLogger({
        label: path,
        level: 'info',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
            new winston.transports.File({ filename: 'var/log/error.log', level: 'error' }),
            new winston.transports.File({ filename: 'var/log/combined.log' })
        ]
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
            format: winston.format.simple()
        }));
    }

    return logger;
}

module.exports = getLogger;