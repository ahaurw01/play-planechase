import React from 'react';
import { Link } from 'react-router'
import PlanechaseIcon from './planechase-icon'

const App = ({children}) =>
  <div className="container">
    <Link to="/" className="header-link">
      <h2>
        <div className="header-image">
          <PlanechaseIcon />
        </div>
        <span className="header-text">Play Planechase</span>
      </h2>
    </Link>
    <div>
      {children}
    </div>
  </div>

App.propTypes = {
  children: React.PropTypes.object.isRequired
}
export default App;
