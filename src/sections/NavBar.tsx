import {motion} from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
  
  return (
    <>
    <nav className=" bg-primary top-0 sticky  border-b border-amber-100 text-cream z-50">
      <motion.div 
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
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
      </motion.div>
    </nav>
    
    </>
  )
}

export default NavBar