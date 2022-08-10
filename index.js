// Import stylesheets
import './style';
import Logger from './Custom-Implementations/Logger/logger-Singleton-Class';
import * as Comp from './Custom-Implementations/Test-Components/test-file-1';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1 align='center'>Come and Lets play with Singleton classes</h1>`;

const console = new Logger();

console._log('Hello');
console._log('Abhay');
console._log('Kuch bhi');
