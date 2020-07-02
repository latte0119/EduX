import React from 'react'
import{
  HashRouter as Router,
}from 'react-router-dom'
import {Container} from 'reactstrap'
import NavigationBar from './components/NavigationBar'
import UserSearchBar from './components/UserSearchBar'

const App:React.FC=()=>{
  return(
    <Router>
      <NavigationBar/>
      <UserSearchBar/>
      <Container
        className="my-5"
        style={{width:"100%",maxWidth:"90%"}}
      >

      </Container>
    </Router>
  )
}
export default App;
