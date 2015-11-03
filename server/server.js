var Hapi = require('hapi');
var Path = require('path');
var Inert = require('inert');

var server = new Hapi.Server();
server.connection({
    port: 80,
    host: 'localhost',
     routes: {
            files: {
                relativeTo: Path.join(__dirname, '')
            }
        }
});

server.register(Inert, function () {});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: '../app/index.html'
    }
});

server.route({
    method: 'GET',
    path: '/styles.css',
    handler: {
        file: '../app/dist/styles.css'
    }
});

server.route({
    method: 'GET',
    path: '/app.js',
    handler: {
        file: '../app/dist/app.js'
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '../app/views/',
            redirectToSlash: true,
            index: true
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});