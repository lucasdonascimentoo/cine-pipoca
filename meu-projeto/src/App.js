import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Series from './components/pages/Series';
import Filmes from './components/pages/Filmes';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <NavBar/>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/filmes" element={<Filmes/>}/>
          <Route path="series" element={<Series/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
