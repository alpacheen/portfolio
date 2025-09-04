import {motion, useScroll, useTransform} from 'framer-motion';
import {useState} from 'react';
import {Menu, X} from 'lucide-react';


const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(34, 34, 34, 100)', 'rgba(34, 34, 34, 0.85)'],
  )
  return (
    <>
    <motion.nav
    style={{ backgroundColor, backdropFilter: ' blur(3px)' }}
    className=" bg-primary top-0 sticky  border-b border-amber-100 text-cream z-50">
      <motion.div 
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 2,  }}
      className="mx-auto flex items-center justify-end space-x-2.5 px-4 py-3">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-lg font-medium hover:text-amber-200 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
         <button
      className='md:hidden text-amber-300 focus-outline-none z-50 relative'
      onClick={(e) => setIsOpen(!isOpen)}
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
      </motion.div>
      {isOpen && (
        <div
        className='md:hidden bg-primary border-b border-amber-100
        shadow-lg text-cream flex flex-col items-center justify-center space-y-4 py-4'
        >
          <div className='px-4 py-4 space-y-3'>
            <div className='space-y-2'>
              {navLinks.map((link) => (
                <motion.a
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * navLinks.indexOf(link) }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='block text-lg font-medium hover:text-amber-200 transition-colors duration-300'
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}
     
    </motion.nav>
    
    </>
  )
}

export default NavBar
