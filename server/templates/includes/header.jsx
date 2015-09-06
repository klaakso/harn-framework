var React = require('react/addons');

var Component = React.createClass({
  render: function() {
    return (
      <head>
        <link href="bower_components/Materialize/dist/css/materialize.min.css" media="screen,projection" rel="stylesheet" type="text/css"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      </head>
    );
  }
});

module.exports = Component;
