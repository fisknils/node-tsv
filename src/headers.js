const stringify = require('./stringify');

module.exports = (function(mixed, r = [] ){
    let str;
    if(typeof mixed === 'object') {
        str = stringify(object);
    } else if(typeof mixed === 'string') {
        str = mixed;
    }
    return str.split(/\n/)[0].split(/\t/);
});