//built in path module direct import
const path = require('path');
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.join(__dirname,'test','hello.html'));
console.log(path.resolve(__dirname,'test','hello.html'));
console.log(path.normalize('C://test/hello.html'));
console.log(path.isAbsolute('C://test/hello.html'));
console.log(path.isAbsolute('/test/hello.html'));
console.log(path.relative(__dirname,'test/hello.html'));
console.log(path.sep);
console.log(path.delimiter);
console.log(path.win32);
console.log(path.posix);
console.log(__dirname);
console.log(__filename);