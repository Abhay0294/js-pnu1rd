export default class Logger {
  logs: any[];
  constructor() {
    this.logs = [];
  }
  message_log(message) {
    this.logs.push(message);
    this.x;
  }

  x = (() => console.log(this.logs))();
}
