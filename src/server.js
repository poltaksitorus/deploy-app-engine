const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 8000,
        host: '0.0.0.0',
    });

    // Route untuk endpoint root
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello world!\n';
        },
    });

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

// Menangani error saat server gagal dijalankan
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

// Memulai server
init();
