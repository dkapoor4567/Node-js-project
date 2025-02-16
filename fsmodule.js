//built in fs module direct import
const fs = require('fs');
console.log(fs.readdirSync('./'));
console.log(fs.readFileSync('test.txt','utf8'));
console.log(fs.writeFileSync('test.txt','Hello World'));
fs.appendFileSync('test.txt','Hello World2');
fs.writeFile('test2.txt','Hello World3564564545645456',(err)=>{
    if(err) throw err;
    console.log('File written');
});
fs.readFile('test2.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
fs.appendFile('test2.txt','Hello World2',(err)=>{        
    if(err) throw err;
    console.log('File written');
});