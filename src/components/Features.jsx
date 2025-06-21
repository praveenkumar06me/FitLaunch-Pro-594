import { motion } from 'framer-motion';
import { FiActivity, FiHeart, FiCalendar, FiMessageCircle } from 'react-icons/fi';

const features = [
  {
    icon: <FiActivity className="text-3xl" />,
    title: "Custom Workouts",
    description: "Get personalized workout plans tailored to your goals and fitness level."
  },
  {
    icon: <FiHeart className="text-3xl" />,
    title: "Health Tracking",
    description: "Monitor your progress with detailed health and fitness metrics."
  },
  {
    icon: <FiCalendar className="text-3xl" />,
    title: "Meal Planning",
    description: "Access healthy recipes and personalized nutrition guidance."
  },
  {
    icon: <FiMessageCircle className="text-3xl" />,
    title: "Expert Support",
    description: "Connect with certified trainers for guidance and motivation."
  }
];

export default function Features() {
  return (
    <div id="features" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything you need to reach your goals
          </h2>
          <p className="mt-4 text-gray-600">
            Comprehensive features to support your fitness journey
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}