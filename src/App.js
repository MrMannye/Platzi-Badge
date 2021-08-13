import React,{useState} from 'react'
import './App.css';
import Badge from './components/Badge'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import BadgeForm from './components/BadgeForm';
import 'bootstrap/dist/css/bootstrap.css'
import Badges from './components/Badges'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [form, setForm] = useState({firstName: "Miguel",});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleonClick = () => {
    alert(JSON.stringify(form));
  }
  return (
    <Router>
      <div className="app">
          <Layout>
          <Switch>
            <Route exact path='/'>
              <div className='badgeNew__hero'>
                  <img className='img-fluid' src='images/badge-header.svg' alt="" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <Badge
                      firstName={form.firstName} 
                      lastName={form.lastName}
                      avatarUrl='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
                      jobTitle={form.job}
                      instagram={form.instagram}
                    />
                  </div>
                  <div className="col-5">
                    <BadgeForm onChange={handleChange} onClick={handleonClick}/>
                  </div>
                </div>
              </div>
            </Route>

            <Route exact path='/badges'>
              <Badges></Badges>
            </Route>
            
            <Route component={NotFound}></Route>

          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
