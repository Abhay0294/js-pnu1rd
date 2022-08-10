// Import stylesheets
import './style';
import Logger from './Custom-Implementations/Logger/logger-Singleton-Class';
import TestClass from './Test-Components/test-file';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1 align='center'>Come and Lets play with Singleton classes</h1>`;

const customConsole = new Logger();
const testClassObject = new TestClass();

customConsole._log('Hello');
customConsole._log('Abhay');
customConsole._log('Kuch bhi');
testClassObject.print();
