const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(bodyparser.json());
app.use('/dishes', dishRouter);

// app.get('/dishes/:dishId', (req,res,next) => {
//     res.end('Will send the details of the dish: '+ req.params.dishId + ' to you!');
// });

// app.post('/dishes/:dishId', (req,res,next) => {
//     res.statusCode = 403;
//     res.end('POST operation not supported on dishes');
// });

// app.put('/dishes/:dishId', (req,res,next) => {
//     res.write('Updating the dish: '+ req.params.dishId + '\n');
//     res.end('Will update the dish: '+ req.body.name + " with details: "+ req.body.description);
// });

// app.delete('/dishes/:dishId', (req,res,next) => {
//     res.end('Deleting the dish: '+ req.params.dishId);
// });

app.use((req,res,next) => {
    // console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end('<html><body><h1>This is a express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})