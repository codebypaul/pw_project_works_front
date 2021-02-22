import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
// pages
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
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
        <Route path='/blog' component={Blog}/>
        <Route path='/contact_us' component={Contact}/>
        <Route path='/FAQ' component={FAQ}/>
        <Route path='/pricing' component={Pricing}/>
        <Route path='/reviews' component={Reviews}/>
        <Route path='/services' component={Services}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
