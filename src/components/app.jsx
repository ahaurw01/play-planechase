import React from 'react';

const App = ({children}) =>
  <div className="container">
    <h1>
      <img
        className="header-image"
        src="images/planechase-icon.svg" />
      <span className="header-text">Play Planechase</span>
    </h1>
    <div>
      {children}
    </div>
  </div>

App.propTypes = {
  children: React.PropTypes.object.isRequired
}
export default App;
