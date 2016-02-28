import React from 'react';

const App = ({children}) =>
  <div>
    <h1>Play Planechase</h1>
    {children}
  </div>

App.propTypes = {
  children: React.PropTypes.isRequired
}
export default App;
