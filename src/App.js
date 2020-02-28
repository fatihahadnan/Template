import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './containers/Login';
import { Layout, Menu, Icon } from 'antd';
const { Header, Footer } = Layout;

const App = () => {

  useEffect(() => {
    document.title = "Hello Template"
  })

  return (
    <Router>
      <Switch>
        <Route path="/" component={Login}/>
      </Switch>
  
        <Layout className="layout">
          <Footer className="footer">Fatihah Adnan ©2020</Footer>
        </Layout>

    </Router>
  )
}

export default App;
