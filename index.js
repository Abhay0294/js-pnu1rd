// Import stylesheets
import './style';
import Logger from './custom-Implementations/logger/logger-Singleton-Class';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const x = new Logger();
console.log(x);
