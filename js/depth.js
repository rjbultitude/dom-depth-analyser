import htmlCollection from './html-collection-utils.js';
htmlCollection();

export default function maxDepth(root) {
    // base case
    if (!root) {
        console.log('base case. root is ', root);
        return 0;
    }
    let max = 0;
    let deepestChildContainer = null;

    root.children.each((child) => {
        const depthObj = maxDepth(child);
        // max = Math.max(max, maxDepth(child).max);
        if (max < depthObj.max) {
            max = depthObj.max;
            deepestChildContainer = child;
        } else {
            max = max;
            deepestChildContainer = depthObj.deepestChildContainer;
        }
        console.log('finished loop iteration for ', child);
    });
    console.log('returning. Max is', max);
    return {max: max + 1, deepestChildContainer}
  };
