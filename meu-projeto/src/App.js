import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import Filmes1 from './layout/Filmes1'
import Series1 from './layout/Series1'
import Search from './scripts/Search';
import PageMovie from './pages/PageMovie'
import PageSeries from './pages/PageSeries';
function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/filmes1" element={<Filmes1/>}/>
          <Route path="/movie/:id" element={<PageMovie/>}/>
          <Route path="/series1" element={<Series1/>}/>
          <Route path="/tvshow/:id" element={<PageSeries/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
