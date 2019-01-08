module.exports = (function(str, r = [] ){
    str = str.replace(/\r\n/g,"\n");
    var lines = str.split("\n");
    var headers = lines.splice(0,1).pop().split("\t");
    
    var arr = lines.map((line,i)=>{
        line = line.split("\t");
        var r = {};
        for(let hi in headers) {
            var h = headers[hi];
            r[h] = line[hi];
        }
        return r;
    });
    return arr;
});