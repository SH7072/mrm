import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Submit from './components/Submit';


function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/submit" element={<Submit />} />
      </Routes>
    </Router>

  );
}

export default App;
