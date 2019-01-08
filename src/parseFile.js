const fs = require('fs');
const parse = require('./parse');

module.exports = (function(filepath,opts={}){
	opts = Object.assign({"encoding": 'utf-8'},opts);
	var content = fs.readFileSync(filepath,opts);
	return parse(content);
});
