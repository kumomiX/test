import { useThrottle } from '@react-hook/throttle'
import { useState, useEffect, createContext, useContext, useMemo } from 'react'
const NavigationContext = createContext()

export function NavigationProvider({ children }) {
  const [viewport, setViewport] = useThrottle(
    {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
    },
    60
  )
  const [data, setData] = useState(null)
  const value = { data, setData, map: { viewport, setViewport } }
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

const useNavigation = () => useContext(NavigationContext)
export default useNavigation
