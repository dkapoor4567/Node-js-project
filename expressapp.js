const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/userhtml', (req, res) => {  
    const data = fs.readFileSync('index.html','utf8'); 
    res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})