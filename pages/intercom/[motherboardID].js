import DefaultLayout from 'components/DefaultLayout'
import React from 'react'
import { getLayout } from 'components/DefaultLayout'
import { useRouter } from 'next/router'
import useIntercom from 'features/intercoms/useIntercom'
import Image from 'next/image'

export default function IntercomPage({ ...props }) {
  const router = useRouter()
  const { data: intercom } = useIntercom(router.query.motherboardID)

  return (
    <div>
      <h1 className="flex items-center">
        {intercom ? (
          <>
            <Image width={32} height={32} src="/images/sputnik_intercom.svg" />{' '}
            {intercom?.motherboardID}
          </>
        ) : (
          <span class="skeleton-box w-64 inline-block" style={{ height: 62 }} />
        )}
      </h1>

      <code className="fixed top-0 right-0 z-50">
        {JSON.stringify(intercom, null, 2)}
      </code>
    </div>
  )
}

IntercomPage.getLayout = getLayout
