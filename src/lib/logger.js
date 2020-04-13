import winston from 'winston';

const logger = winston.createLogger({
  levels: {
    debug: 0,
    info: 1,
    silly: 2,
    warn: 3,
    error: 4,
  },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.colorize()
      ),
    }),
  ],
});

export default logger;
