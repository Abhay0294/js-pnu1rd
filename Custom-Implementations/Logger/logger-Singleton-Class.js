export default class Logger {
  logs;
  constructor() {
    this.logs = [];
  }
  _log(message) {
    this.logs.push(message);
    return this.print_log();
  }
  print_log = () => console.info('Logger>>', this.logs);
}
