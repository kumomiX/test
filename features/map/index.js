import { useThrottle } from '@react-hook/throttle'
import Button from 'components/Button'
import useNavigation from 'features/navigation/use-navigation'
import Link from 'next/link'
import { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { MAPBOX_ACCESS_TOKEN } from './constants'

export default function Map() {
  const {
    setData,
    map: { viewport, setViewport },
  } = useNavigation()

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}>
      <Marker latitude={37.7577} longitude={-122.4376}>
        <Button
          onClick={() => {
            setData(1)
            setViewport({
              latitude: 37.7577,
              longitude: -122.4376,
              zoom: 10,
            })
          }}>
          opt 1
        </Button>
      </Marker>
      <Marker latitude={37.7877} longitude={-121.4376}>
        <Link
          href="/option/2"
          onClick={() => {
            // setData(2)
            setViewport({
              latitude: 37.7877,
              longitude: -121.4376,
              zoom: 10,
            })
          }}>
          opt 2
        </Link>
      </Marker>
    </ReactMapGL>
  )
}
