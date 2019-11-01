import htmlCollection from './html-collection-utils.js';
// Add helper fucntions to prototype
// I know, I know this is risky
htmlCollection();

const startNodeClassName = 'main-container';

function countDOMDepth(htmlCollection) {
    let nList;
    if (HTMLCollection.prototype.isPrototypeOf(htmlCollection)) {
        nList = htmlCollection.toArray();
    } else {
        nList = htmlCollection;
    }
    let count = 0;
    for (let index = 0; index < nList.length; index++) {
        count = index;
    }
    return count;
}

function getDOMDepth(startingNode, className) {
    let count = 0;
    startingNode.children.each((node) => {
        if (node.classList.contains(className)) {
            const children = node.childNodes;
            console.log('children', children);
            count = countDOMDepth(children);
        } else {
            console.warn('no results');
        }
    });
    return count;
}

const totalDepth = getDOMDepth(document.body, startNodeClassName);
console.log('totalDepth', totalDepth);
