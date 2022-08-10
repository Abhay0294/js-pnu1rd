// Import stylesheets
import './style';
import logger from './Custom-Implementations/Logger/logger-Singleton-Class';
import TestClass from './Test-Components/test-file';
import TestClass2 from './Test-Components/test-file-2';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1 align='center'>Come and Lets play with Singleton classes</h1>`;

const customConsole = new TestClass();
const testClassObject = new TestClass2();
customConsole.print();
testClassObject.print();
