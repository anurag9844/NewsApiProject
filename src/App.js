import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";

 class App extends Component {
  render() {
    return ( 
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="home" pageSize={20} country={'us'} category={'general'} />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={20} country={'us'} category={'entertainment'} />}/> 
          <Route exact path="/technology" element={<News key="technology" pageSize={20} country={'us'} category={'technology'} />}/> 
          <Route exact path="/health" element={<News key="health" pageSize={20} country={'us'} category={'health'} />}/> 
          <Route exact path="/sports" element={<News key="sports" pageSize={20} country={'us'} category={'sports'} />}/> 
          <Route exact path="/business" element={<News  key="business"pageSize={20} country={'us'} category={'business'} />}/> 
          
          

        </Routes>
      </Router>
      </>
    )
  }
}
export default App;
