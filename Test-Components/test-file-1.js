import Logger from './Custom-Implemenations/Logger/logger-Singleton-Class';

const x = new Logger();

(() => {
  console.log('XXXXXXXX', this.x);
})();
