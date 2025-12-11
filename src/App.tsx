import React from 'react';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const App = () => {
  return (
    <>
<NavBar />
        <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    </>
  )
}

export default App