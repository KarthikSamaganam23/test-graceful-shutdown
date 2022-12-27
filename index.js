const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const posts = {};

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

app.get('/posts', async (req, res) => {
    await sleep(11000);
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const book = req.body;
    posts[id] = { id, book };
    res.status(201).send(posts[id].book);

});

app.get('/get_active_connections', function (req, res) {
    server.getConnections(function (error, count) {
        res.end(count.toString());
    });
});

app.post('/stop_server', function (req, res) {
    server.close();
    res.end("Server Stopped")
});

app.get('/healthCheck-Long-Success', function (req, res) {
    for (let index = 0; index < 10; index++) {
        setTimeout(function () {
            console.log('Sending heartbeat !')
            res.writeProcessing()
        }, index * 60 * 1000)
    }
    setTimeout(function () {
        res.json({ success: true })
    }, 11 * 60 * 1000)
})


var server = app.listen(4001, () => {
    console.log("Listening on 4001");
});



