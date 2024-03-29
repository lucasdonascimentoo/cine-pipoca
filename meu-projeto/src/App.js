import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './components/pages/Home';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Filmes1 from './components/pages/Filmes1'
import Series1 from './components/pages/Series1'
import Search from './components/pages/Search';
import PageMovie from './components/pages/PageMovie'
import PageSeries from './components/pages/PageSeries';
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
