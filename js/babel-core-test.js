var babelcore = require("babel-core");
var es6code = "let x = n => n+1";
var es5code = babelcore.transform(es6code, {
  presets: ['es2015']
});
console.log(es5code.code);
