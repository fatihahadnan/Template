import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './containers/login/Login';
import Home from './containers/home/Home';
import { Layout } from 'antd';
const { Footer } = Layout;

const App = () => {

  useEffect(() => {
    document.title = "Hello Template"
  })

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Home}/>
      </Switch>
  
        <Layout className="layout">
          <Footer className="footer">Fatihah Adnan © 2020</Footer>
        </Layout>

    </Router>
  )
}

export default App;
