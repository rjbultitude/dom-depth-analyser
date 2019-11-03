import htmlCollection from './html-collection-utils.js';
htmlCollection();

function maxDepth(root) {
    if(!root) return 0;
    let max = 0;
    let deepestChild = null;

    root.children.each((child) => {
        const depthObj = maxDepth(child);
        // max = Math.max(max, maxDepth(child).max);
        if (max < depthObj.max) {
            max = depthObj.max;
            deepestChild = depthObj.deepestChild;
        } else {
            max = max;
            deepestChild = child;
        }
        console.log('child', child);
    });
    return {max: max + 1, deepestChild}
  };

const startNodeClassName = 'main-container';
const startCollection = document.getElementsByClassName(startNodeClassName);
console.log(maxDepth(startCollection[0]));
