import Navbar from 'features/navbar'
import Head from 'next/head'
import Link from 'next/link'

const DefaultLayout = (props) => (
  <>
    <Head>
      <title>Default</title>
      <meta charSet="utf-8" />
    </Head>
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">{props.children}</div>
    </div>
  </>
)

export default DefaultLayout

export const getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>
