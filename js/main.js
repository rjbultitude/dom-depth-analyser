import htmlCollection from './html-collection-utils.js';
// Add helper fucntions to prototype
// I know, I know this is risky
htmlCollection();

const startNodeClassName = 'main-container';
let count = 0;
let maxCount = 0;
let deepestNode;

function convertHTMLCollection(htmlGroup) {
    if (HTMLCollection.prototype.isPrototypeOf(htmlGroup)) {
        console.log('Is HTMLCollection', htmlGroup);
        return htmlGroup.toArray();
    }
    return htmlGroup;
}

function countDOMDepth(startCollection) {
    console.log('startCollection', startCollection);
    let nextCollection;
    for (let index = 0; index < startCollection.length; index++) {
        if (startCollection[index].children.length > 0) {
            count += 1;
            console.log('count', count);
            nextCollection = startCollection[index].children;
            countDOMDepth(nextCollection);
        } else {
            if (count > maxCount) {
                maxCount = count;
            } else {
                count = 0;
            }
            deepestNode = startCollection[index];
            //nextCollection = startCollection[index];
        }
    }
    return {maxCount, count, deepestNode};
}

function getDOMDepth(className) {
    const startCollection = document.getElementsByClassName(className);
    return countDOMDepth(startCollection);
}

const totalDepth = getDOMDepth(startNodeClassName);
console.log('totalDepth', totalDepth);
