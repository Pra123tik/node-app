const http = require('http');
const httpserver = http.createServer((req,res)=>{
    console.log("req to server");
    console.log('let me respnd');
    res.end("hellow my world");
       
});
httpserver.listen(8089,()=>{
    console.log('server startat port 8089');   
});