var xss = require("xss");
var html = xss('https://github.com/facebook/create-react-app/issues/7183');
console.log(html);