import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(35, 31, 32, 1)', 'rgba(35, 31, 32, 0.55)']
  );
  
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else if (previous !== undefined && latest < previous) {
      setHidden(false);
    }
  });

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
      variants={{
        hidden: { y: -100, opacity: 0, transition: { duration: 0.5 } },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
      }}
      animate={hidden ? 'hidden' : 'visible'}
        style={{ backgroundColor }}
        className="text-cream fixed top-0 z-50 w-full border-b border-amber-100 backdrop-blur-md"
      >
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, }}
          transition={{ duration: 1, delay: 2 }}
          className="mx-auto flex items-center justify-between px-6 py-4"
        >
          <motion.a
            className="font-coiny text-xl font-bold text-amber-100"
            whileHover={{ scale: 1.05 }}
            onClick={handleLinkClick}
            href="#about"
          >
            AM
          </motion.a>

          {/* Desktop */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="group relative text-lg font-medium transition-all duration-300 hover:text-amber-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-200 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile*/}
          <button
            className="relative z-50 p-2 text-amber-100 focus:outline-none md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          style={{ top: '73px' }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: isOpen ? 0 : '100%' }}
        transition={{
          type: 'tween',
          duration: 0.2,
          ease: 'easeInOut',
        }}
        className="bg-primary fixed top-[73px] z-50 h-screen w-screen border-l shadow-2xl backdrop-blur-md md:hidden"
      >
        <div className="flex h-full flex-col justify-center space-y-12 px-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="font-galindo group relative inline-block text-center text-4xl text-amber-100 transition-all duration-300 hover:text-amber-200"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isOpen ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              whileHover={{ scale: 1.05, x: 8 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 bg-amber-200 transition-all duration-300 group-hover:w-1/4"></span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
