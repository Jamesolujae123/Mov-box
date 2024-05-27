import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Videodetails from './pages/Movie-details';
import Footer from './footer';
import Search from './search';


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/movie-details/:id' element={<Videodetails />}/>
    </Routes> 
    <Footer />
   </>
  );
}

export default App;
