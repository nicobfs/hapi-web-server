const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({ 
        //HTTP server sendiri dibuat melalui method Hapi.server()
        port : 5000,
        host: 'localhost'
        //port dan host merupakan properti dari objek ServerOptions
    });

    server.route(routes);

    await server.start();
    //proses menjalankan server (server.start()) dilakukan secara fungsi async 
    //dan memanggil server.start() menggunakan await
    console.log(`Server berjalan pada ${server.info.uri}`);

    //setelah server berjalan dapat dilihat alamat lengkap dan port di mana sever dijalankan melalui properti server.info.uri.
}
init();