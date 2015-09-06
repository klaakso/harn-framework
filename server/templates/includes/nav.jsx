var React = require('react/addons');

var Component = React.createClass({
  render: function() {
    return (
      <nav className="teal">
        <div className="container">
          <div className="nav-wrapper">
            <a class="brand-logo" href="#">Logo</a>
            <ul class="right hide-on-med-and-down" id="nav-mobile">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Component;
