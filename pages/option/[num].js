import { getLayout } from 'components/NavLayout'
import useNavigation from 'features/navigation/use-navigation'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function OptionPage({ ...props }) {
  const {
    setData,
    map: { setViewport },
  } = useNavigation()
  const router = useRouter()
  useEffect(() => {
    setData(router.query.num)
    setViewport({
      latitude: 37.7877,
      longitude: -121.4376,
      zoom: 10,
    })
    // we can zoom here using setViewport from navigation context
  }, [])
  const { t } = useTranslation()
  return (
    <div>
      <h1>Option Page {t('hello')}</h1>
      <Link href="/">to home</Link>
    </div>
  )
}

OptionPage.getLayout = getLayout
