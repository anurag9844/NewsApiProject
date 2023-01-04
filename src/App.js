import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

 class App extends Component {
  state = {
    progress:0
  }
   setProgress =(progress)=> {
    this.setState({progress:progress})
   }

  render() {
    return ( 
      <>
      <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
       />
        <Routes>
          <Route exact path="/" element={<News setProgress = {this.setProgress} key="home" pageSize={20} country={'us'} category={'general'} />}/>
          <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} key="entertainment" pageSize={20} country={'us'} category={'entertainment'} />}/> 
          <Route exact path="/technology" element={<News setProgress = {this.setProgress} key="technology" pageSize={20} country={'us'} category={'technology'} />}/> 
          <Route exact path="/health" element={<News setProgress = {this.setProgress} key="health" pageSize={20} country={'us'} category={'health'} />}/> 
          <Route exact path="/sports" element={<News setProgress = {this.setProgress} key="sports" pageSize={20} country={'us'} category={'sports'} />}/> 
          <Route exact path="/business" element={<News setProgress = {this.setProgress}  key="business"pageSize={20} country={'us'} category={'business'} />}/> 
          
          

        </Routes>
      </Router>
      </>
    )
  }
}
export default App;
