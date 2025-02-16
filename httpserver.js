//http use case
const http = require('http');
const fs = require('fs');
const { env } = require('process');
const port = env.PORT || 3000;
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.write('<h1>Hello World</h1>');
        res.end();
    }
    else if(req.url === '/api/users'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
    else if(req.url === '/api/userhtml'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }

    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.write('<h1>Not found</h1>');
        res.end();
    }
}); 
server.listen(port,()=>{    
    console.log(`Server running on port ${port}`);
});