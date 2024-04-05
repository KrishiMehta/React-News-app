// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  pageSize = 15;
  // apiKey=process.env.REACT_APP_NEWS_API
 
  render() {
    return (
      <div>
        <Router>
       
       <Navbar/>
       
      <Switch>
       <Route exact path="/Home"><News apiKey={this.apiKey} key="Home"  pageSize={this.pageSize} country="in" category ="Home"/></Route>
       {/* <Route exact path="/general"><News  key="general"  pageSize={this.pageSize} country="in" category ="Home"/></Route> */}
       <Route exact path="/"><News  key="general"  pageSize={this.pageSize} country="in" category ="general"/></Route>
       <Route exact path="/Business"><News key="Business" pageSize={this.pageSize} country="in" category ="Business"/></Route>
       <Route exact path="/Entertainment"><News  key="Entertainment" pageSize={this.pageSize} country="in" category ="Entertainment"/></Route>
       <Route exact path="/Health"><News  key="Health" pageSize={this.pageSize} country="in" category ="Health"/></Route>
       <Route exact path="/Science"><News  key="Science" pageSize={this.pageSize} country="in" category ="Science"/></Route>
       <Route exact path="/Sports"><News key="Sports" pageSize={this.pageSize} country="in" category ="Sports"/></Route>
       <Route exact path="/Technology"><News  key="Technology" pageSize={this.pageSize} country="in" category ="Technology"/></Route>
       </Switch>
       </Router>

{/* <Routes>
        <Route
          path="/"
          element={[
            <Navbar key="general" />,
            <News apiKey={this.apiKey } key="news" pageSize={this.pageSize} country="in" category="general" />,
          ]}
        />
        <Route
          path="/Business"
          element={[
            <Navbar key="Business" />,
            <News apiKey={this.apiKey } key="business" pageSize={this.pageSize} country="in" category="Business" />,
          ]}
        />
        <Route
          path="/Entertainment"
          element={[
            <Navbar key="Entertainment" />,
            <News apiKey={this.apiKey } key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />,
          ]}
        />
        <Route
          path="/Health"
          element={[
            <Navbar key="Health" />,
            <News apiKey={this.apiKey } key="health" pageSize={this.pageSize} country="in" category="Health" />,
          ]}
        />
        <Route
          path="/Science"
          element={[
            <Navbar key="Science" />,
            <News apiKey={this.apiKey } key="science" pageSize={this.pageSize} country="in" category="Science" />,
          ]}
        />
        <Route
          path="/Sports"
          element={[
            <Navbar key="Sports" />,
            <News apiKey={this.apiKey } key="sports" pageSize={this.pageSize} country="in" category="Sports" />,
          ]}
        />
        <Route
          path="/Technology"
          element={[
            <Navbar key="Technology" />,
            <News apiKey={this.apiKey } key="technology" pageSize={this.pageSize} country="in" category="Technology" />,
          ]}
        />
      </Routes> */}
      </div>
    )
  }
}
