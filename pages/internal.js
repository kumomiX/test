import { getLayout } from 'components/DefaultLayout'
import Link from 'next/link'
import React from 'react'

export default function InternalPage({ ...props }) {
  return (
    <div>
      <h1>internal page</h1>
      <Link href="/">to home</Link>
    </div>
  )
}

InternalPage.getLayout = getLayout
