import maxDepth from './depth.js';

//const startNodeClassName = 'react-target';
const startNodeClassName = 'main-container';
const startCollection = document.getElementsByClassName(startNodeClassName);
console.log(maxDepth(startCollection[0]));