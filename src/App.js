

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';
import Header from './Components/Header'
import Footer from './Components/Footer';


function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/products/:id' element={<Product/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
