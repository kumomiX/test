// import 'stop-runaway-react-effects/hijack'
import 'tailwindcss/tailwind.css'
import 'styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useRef } from 'react'
import { NavigationProvider } from 'features/navigation/use-navigation'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <NavigationProvider>
          {getLayout(<Component {...pageProps}></Component>)}
        </NavigationProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
