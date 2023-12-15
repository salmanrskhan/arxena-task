import React from 'react';

import Home from './Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
