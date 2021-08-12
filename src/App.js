import './App.css';
import Badge from './components/Badge'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">

      <Navbar></Navbar>
      <div className='badgeNew__hero'>
        <img className='img-fluid' src='images/badge-header.svg' alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName='Miguel' 
              lastName='Aguilera'
              avatarUrl='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
              jobTitle='Frontend Developer'
              instagram='@manu__7u7'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
