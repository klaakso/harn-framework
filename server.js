var Hapi = require('hapi'),
  Path = require('path');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

//View engine for HapiJS
server.register([{
  register: require('vision')
},
{
  register: require('inert')
}], function(err) {

  server.views({
    engines: {
      jsx: require('hapi-react-views')
    },
    path: __dirname + '/server/templates',
    compileOptions: {
      pretty: true
    }
  });
});

// Index route
server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.view('index', {
      title: 'index.jsx | Hapi ',
      message: 'Hello World!'
    });
  }
});

// Public Directory
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
});

// Start the server
server.start(function() {
  console.log('Server running at:', server.info.uri);
});
