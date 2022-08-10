// Import stylesheets
import './style';
import Logger from './Custom-Implementations/Logger/logger-Singleton-Class';
import PrintHello from './Test-Components/test-file';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1 align='center'>Come and Lets play with Singleton classes</h1>`;

const console = new Logger();

console._log('Hello');
console._log('Abhay');
console._log('Kuch bhi');
console.log('RRRRRRRR', PrintHello.print);
