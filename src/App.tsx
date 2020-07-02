import React from 'react'
import{
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
}from 'react-router-dom'

import NavigationBar from './components/NavigationBar'

const App:React.FC=()=>{
  return(
    <Router>
      <div>
        <div className="sticky-top">
          <NavigationBar/>
        </div>
      </div>
    </Router>
  )
}
export default App;
