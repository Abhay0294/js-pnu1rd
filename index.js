// Import stylesheets
import './style';
import Logger from './Custom-Implementations/Logger/logger-Singleton-Class';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1 align='center'>Come and Lets play with Singleton classes</h1>`;

const x = new Logger();
console.log(x);
