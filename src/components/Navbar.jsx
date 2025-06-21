import { motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-primary"
        >
          FitLife
        </motion.h1>
        
        <div className="hidden md:flex space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </div>
        
        <button className="md:hidden text-2xl">
          <FiMenu />
        </button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-primary text-white px-6 py-2 rounded-full font-medium"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      className="text-gray-600 hover:text-primary transition-colors"
    >
      {children}
    </motion.a>
  );
}