import useNavigation from 'features/navigation/use-navigation'
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import Map from 'features/map'
import Button from './Button'
import { useRouter } from 'next/router'

const NavLayout = (props) => {
  const { data, setData } = useNavigation()
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Test</title>
        <meta charSet="utf-8" />
      </Head>
      <div className="flex ">
        <div className="w-64 h-screen p-4">
          <AnimatePresence>
            <motion.nav
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              className="w-full h-full bg-gray-300 flex flex-col rounded-xl p-4">
              {data ? (
                <div className="flex flex-col">
                  <Button
                    onClick={() => {
                      setData(null)
                      router.replace('/')
                    }}>
                    back
                  </Button>
                  option {data}
                </div>
              ) : (
                <h4>Default Navbar</h4>
              )}
            </motion.nav>
          </AnimatePresence>
        </div>
        <div className="flex-1 mx-auto mt-4">
          <Map />
          <div className="z-50 fixed top-0">32131231{props.children}</div>
        </div>
      </div>
    </>
  )
}
export default NavLayout

export const getLayout = (page) => <NavLayout>{page}</NavLayout>
