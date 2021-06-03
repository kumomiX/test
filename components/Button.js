import { motion } from 'framer-motion'
import React from 'react'

export default function Button({ children, ...props }) {
  return (
    <button
      className="relative px-4 py-2 focus:outline-none text-primary-contrast "
      {...props}>
      <motion.div
        className="bg-primary-main  absolute top-0 left-0 w-full h-full z-10 rounded-lg"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}></motion.div>
      <span className="z-20 relative pointer-events-none">{children}</span>
    </button>
  )
}
