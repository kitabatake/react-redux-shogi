import React from 'react';
import Ban from './ban.jsx'
import Komadai from './komadai.jsx'

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Ban />
        <Komadai />
      </div>
    )
  }
})

export default App