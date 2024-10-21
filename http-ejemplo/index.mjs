import http from 'http';

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mundo\n');

})

server.listen(3000, '127.0.0.1',()=>{
    console.log('Servidor escuchando en el puerto 127.0.0.1:3000');
})