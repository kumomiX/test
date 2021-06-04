import Button from 'components/Button'
import { getLayout } from 'components/NavLayout'
import useNavigation from 'features/navigation/use-navigation'
import Head from 'next/head'
import Link from 'next/link'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

export default function Home() {
  const { setData } = useNavigation()
  return (
    <div>
      <p className="text-xl text-bold">Home</p>
      {/* <Button
        onClick={() => {
          setData(1)
        }}>
        option 1
      </Button>
      <Button
        onClick={() => {
          setData(2)
        }}>
        option 2
      </Button>
      <Button
        onClick={() => {
          setData(3)
        }}>
        option 3
      </Button> */}
      <div className="flex flex-col text-primary-main">
        <Link href="/option/1">opt 1</Link>
        <Link href="/option/2">opt 2</Link>
      </div>

      <Link href="/kek">to kek</Link>
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
