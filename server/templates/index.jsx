var React = require('react/addons'),
  Head = require('./includes/header.jsx'),
  Nav = require('./includes/nav.jsx'),
  Table = require('./table.jsx'),
  Footer = require('./includes/footer.jsx');

var Component = React.createClass({
  render: function() {
    return (
      <html>
        <Head/>
        <body>
          <Nav/>
          <div className="container">
            <div>
              <h1>{this.props.title}</h1>
              <p>{this.props.message}</p>
            </div>
            <Table />
          </div>
          <Footer />
          <script src="https://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
          <script src="bower_components/Materialize/dist/js/materialize.min.js" type="text/javascript"></script>
        </body>
      </html>
    );
  }
});

module.exports = Component;
