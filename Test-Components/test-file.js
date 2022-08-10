import Logger from './../Custom-Implementations/Logger/logger-Singleton-Class';

export default class TestClass {
  customConsole3 = new Logger();

  print() {
    this.customConsole3._log('From test-class');
  }
}
