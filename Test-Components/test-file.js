import Logger from '././Custom-Implemenations/Logger/logger-Singleton-Class';

export default class PrintHello {
  x = new Logger();
  print = () => console.log('$$$$$$$$$$', x);
}
