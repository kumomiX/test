import Head from 'next/head'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import PostsList from '../features/posts/PostsList'

export default function Home() {
  return (
    <div>
      <p className="text-xl text-bold">Home</p>
      <PostsList />
    </div>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['posts', 10], () => fetchPosts(10))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
