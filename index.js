import express from 'express'
import fs from 'fs/promises'
const app = express();

app.get("/", (req, res) => {
    fs.readFile('./index.html', 'utf-8')
    .then(data => {
        res.send(data);
    });
});

app.get("/about", (req, res) => {
    fs.readFile('./about.html', 'utf-8')
    .then(data => {
        res.send(data);
    });
});

app.get("/contact-me", (req, res) => {
    fs.readFile('./contact-me.html', 'utf-8')
    .then(data => {
        res.send(data);
    });
});

app.get("*", (req, res) => {
    fs.readFile('./404.html', 'utf-8')
    .then(data => {
        res.status(404).send(data);
    });
});

app.listen(8080, () => {
    console.log("Express app is listening on port 8080");
});