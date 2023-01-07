class Logger {
  logs;
  constructor() {
    if (Logger.instance == null) {
      this.logs = [];
      Logger.instance = this;
    }
    return Logger.instance;
  }
  _log(message) {
    this.logs.push(message);
    console.info('Logger>>', this.logs);
    this.print_log_count();
  }
  print_log_count = () => console.info('Logger>>', this.logs.length);
}

export const logger = new Logger();
Object.freeze(logger);
export default logger;
