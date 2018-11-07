/**
 * AutocSource class to wrap all actions around the source of the autocomplete
 */
export default class AutocSource {
    
    constructor() {
        this.src = [];
    }
    
    /**
     * @param {array} list the list to be searched for
     * @returns {AutocSource} for chaining
     */
    setSource(list) {
        this.src = list;
        return this;
    }

    /**
     * @param {string} query the search string
     * @returns {array} an array of results
     */
    search(query) {
        const queryRe = new RegExp(query, 'i');
        return this.src.filter(el => queryRe.test(el));
    }

}