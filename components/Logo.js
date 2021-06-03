import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
      <motion.a
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        style={{ cursor: 'pointer' }}>
        <Image width={48} height={48} src="/images/sputnik_sign.svg" />
      </motion.a>
    </Link>
  )
}
