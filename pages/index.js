import { getLayout } from 'components/DefaultLayout'
import Navbar from 'features/navbar'
import Head from 'next/head'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

export default function Home() {
  return (
    <div>
      <p className="text-xl text-bold">Home</p>
    </div>
  )
}

Home.getLayout = getLayout

// export async function getServerSideProps() {
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery(['posts', 10], () => fetchPosts(10))

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }
