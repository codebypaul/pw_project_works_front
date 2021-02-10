import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
// pages
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Reviews from './pages/Reviews'
import Services from './pages/Services'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact_us' component={Contact}/>
        <Route path='/pricing' component={Pricing}/>
        <Route path='/reviews' component={Reviews}/>
        <Route path='/services' component={Services}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
