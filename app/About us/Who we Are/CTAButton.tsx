import { motion } from 'framer-motion'

const BounceButton = () => {
  return (
    <div className='flex justify-center items-center'>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="rounded-xl bg-gray-800 px-6 py-2 text-sm font-medium text-white"
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        Learn More
      </motion.button>
    </div>
  )
}

export default BounceButton