export default function() {

    /**
     * Add a toArray function to HTMLCollection, to make the [].slice.call() approach less obscure.
     */
    HTMLCollection.prototype.toArray = function() {
        return [].slice.call(this);
    };

    /**
     * Shim an 'each' function.
     */
    HTMLCollection.prototype.each = function(fCallback) {
        return this.toArray().forEach(fCallback);
    };

};
