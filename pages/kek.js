import { getLayout } from 'components/NavLayout'
import Head from 'next/head'
import Link from 'next/link'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'

export default function Kek() {
  return (
    <div className="bg-gray-200 flex flex-col">
      <p className="text-xl text-bold">kek</p>
      <Link href="/">to home</Link>
      <Link href="/internal">to internal page</Link>
    </div>
  )
}

Kek.getLayout = getLayout
