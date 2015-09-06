/*
Base Routes
Used for defining your common / global routes
*/

var baseRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply.view('index', {
        title: 'index.jsx | Hapi ',
        message: 'Hello World!'
      });
    }
  },
  {
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: 'public'
          }
      }
  },

];

module.exports = baseRoutes;
