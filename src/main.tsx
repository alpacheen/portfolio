import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './sections/NavBar.tsx'
import Hero from './sections/Hero.tsx'
import Projects from './sections/Projects.tsx'
import About from './sections/About.tsx'
import Contact from './sections/Contact.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <About/>
    
    <Projects />
    <Contact />
  </StrictMode>,
)
