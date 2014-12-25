setTimeout(function() {
      var React = require('react');
      var Timer = require('./Timer');

          React.render(<Timer />, document.getElementById('react-root'));
}, 3000);
