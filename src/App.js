import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { USERS, MOVIES} from './Constants';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import MovieDetail from './components/MovieDetail';
import { NavbarCatalog } from './components/NavbarCatalog';
import './App.css'

const App = (props) => {
  const [users, setUsers] = useState(USERS);
  const [movies, setMovies] = useState(MOVIES);
 
  return (
    <Router>
      <div>
          <Navbar/>
      </div>
        <Routes>
          <Route path="/" element={<Landing users={users}/>} />
          <Route path="/catalog" element={<Catalog users={users} movies={movies} setMovies={setMovies}/>} />
          <Route path="/navbar-catalog" element={<NavbarCatalog movies={movies}/>} />
          <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
    </Router>
  );
};

export default App;

