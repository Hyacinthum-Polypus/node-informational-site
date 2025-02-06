import http from 'node:http'
import fs from 'fs/promises'

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.readFile('./index.html', 'utf-8')
            .then(data => {
                res.end(data);
            })
        break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.readFile('./about.html', 'utf-8')
            .then(data => {
                res.end(data);
            })
        break;
        case '/contact-me':
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.readFile('./contact-me.html', 'utf-8')
            .then(data => {
                res.end(data);
            })
        break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            fs.readFile('./404.html', 'utf-8')
            .then(data => {
                res.end(data);
            })
        break;
    }
})

server.listen(8080);