const url = require('url');
const urldata = url.parse('http://mywebsite.com:8080/hello.html?id=100&status=active',true);
const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');
console.log(myUrl.href);
console.log(myUrl.port);
console.log(myUrl.hostname);
console.log(urldata);
console.log(urldata.query.id);