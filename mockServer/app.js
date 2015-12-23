var port = 8080;
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({port: port, path: '/hello'});

wss.on('connection', function connection(ws) {
    console.log("Starting server on port " + port);

    var generateRandomCount = function() {
        return Math.floor(Math.random() * 100)
    };

    var sendData = function() {
        ws.send(JSON.stringify([
            {
                date: "2015-12-23",
                key: '7-8',
                count: generateRandomCount()
            },
            {
                date: "2015-12-23",
                key: '8-9',
                count: generateRandomCount()
            },
            {
                date: "2015-12-23",
                key: '9-10',
                count: generateRandomCount()
            }
        ]));
    };

    setInterval(sendData, 1000);
});