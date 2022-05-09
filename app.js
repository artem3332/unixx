const WebSocketServer = require('ws');
const  PORT=8081
const webSocketServer = new WebSocketServer.Server({port: 8081},()=>console.log(new Date()+' : Сервер запустился на порте : ',PORT));

webSocketServer.on('connection', ws=>{
    const id = Math.random();
    console.log(new Date()+' : Новое соединение :' + id);

    ws.on('message', function (message) {
        console.log(new Date()+': Получено сообщение : ' + message);

        console.log(new Date()+': Соединение закрыто : '+id);
        ws.close()

        console.log(new Date()+' : Сервер завершил работу на порте : ',PORT);
        process.exit(1)
    });
    ws.on('close', function () {
        console.log(new Date()+': Соединение закрыто : '+id);
    });
});

