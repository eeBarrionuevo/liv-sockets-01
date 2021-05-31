
const { io } = require('../index');

io.on('connection', client => {
    console.log("conectado");
    
    client.on('disconnect', () => {
        console.log("desconectado");
    });

    client.on('mensaje', (payload)=> {
        console.log("ssss", payload);
        io.emit('mensaje', {admin: "Nuevo mensaje"});
    });



});