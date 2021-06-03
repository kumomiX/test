import 'stop-runaway-react-effects/hijack'
import 'tailwindcss/tailwind.css'
import 'styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useRef } from 'react'

export default function MyApp({ Component, pageProps }) {
  const queryClientRef = useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps}></Component>)}
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
