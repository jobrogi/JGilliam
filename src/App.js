import './App.css';
import React, { useState } from 'react';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';

export const ThemeContext = React.createContext();

function App() {
  const[theme,setTheme] = useState(true);
  function _setTheme(){
      setTheme(theme => !theme);
  }
  return (

    <ThemeContext.Provider value={theme}>
      <div className='w-full min-h-screen h-full bg-dark'>
        <Nav />
        <Home />
        <Projects />
        <AboutMe/>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
