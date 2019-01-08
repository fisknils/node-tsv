module.exports = function(arr){
    let headers, lines = [];
    const HEADERS = function(arr) {
        let headers = [];
        arr.forEach(obj=>{
            for(let p in obj) {
                if(headers.indexOf(p) < 0) headers.push(p);
            }
        });
        return headers;
    }
    const LINES = function(arr, headers) {
        let lines = [];
        while(arr.length) {
            let line = [];
            let entry = arr.pop();

            for(let i = 0; i <= headers.length; i++) {
                let p = headers[i];
                if(typeof entry === "undefined") 
                {
                    continue;
                }
                if(typeof entry[p] === "undefined") {
                    line.push("");
                } else {
                    line.push(entry[p]);
                }
            }
            lines.push(line.join("\t"));
        }
        return lines;
    }

    headers = HEADERS(arr);
    lines.push(headers.join("\t"));
    return lines.concat(LINES(arr, headers)).join("\n");
};