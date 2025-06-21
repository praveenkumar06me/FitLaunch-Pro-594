import { motion } from 'framer-motion';
import { FiPlay, FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <div className="pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transform Your Body,
            <span className="text-primary"> Transform Your Life</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Get personalized workout plans, nutrition guidance, and expert coaching to achieve your fitness goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium flex items-center gap-2"
            >
              Start Free Trial <FiArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 px-8 py-3 rounded-full font-medium flex items-center gap-2"
            >
              <FiPlay className="text-primary" /> Watch Demo
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Fitness"
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
        </motion.div>
      </div>
    </div>
  );
}