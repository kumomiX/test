import { useRef, useState } from 'react'
import useSearch from './useSearch'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from 'components/Combobox'
import { useThrottle } from '@react-hook/throttle'
import Link from 'next/link'

import { useRouter } from 'next/router'
import Portal from '@reach/portal'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

const IntercomOption = ({ intercom: { motherboardID } }) => {
  return (
    <ComboboxOption className="!pl-5 !py-4" value={motherboardID}>
      {motherboardID}
    </ComboboxOption>
  )
}

export default function SearchBox({ onFocus, ...props }) {
  const [searchTerm, setSearchTerm] = useThrottle('', 5, true)
  const [focused, setFocused] = useState(false)
  const Router = useRouter()

  const { isLoading, isError, error, isFetching, data } = useSearch(searchTerm)

  return (
    <>
      {focused && (
        <Portal>
          <AnimatePresence>
            <motion.div
              // transition={{ duration: 0.3, times: [0, 0.75, 1] }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.95,
              }}
              className={clsx(
                'bg-gray-100 absolute left-0 top-0 w-full h-full z-0 transition-all duration-200 pointer-events-none'
              )}
              // style={{
              //   backdropFilter: 'blur(10px)',
              // }}
            />
          </AnimatePresence>
        </Portal>
      )}
      <Combobox
        aria-label="Devices Search"
        className="w-full max-w-md z-30"
        onSelect={(item) => {
          setFocused(false)
          Router.replace(`/intercom/${item}`)
        }}>
        <ComboboxInput
          className="w-full"
          onChange={(e) => {
            // console.log(e.currentTarget.value)
            setSearchTerm(e.currentTarget.value)
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Поиск устройств"
        />
        <ComboboxPopover className="shadow-xl z-30">
          {isLoading ? (
            <span>Loading...</span>
          ) : isError ? (
            <span>Error: {error.message}</span>
          ) : null}

          {searchTerm.length > 3 ? (
            data?.length < 1 ? (
              <span style={{ display: 'block', margin: 8 }}>
                No results found
              </span>
            ) : (
              <ComboboxList persistSelection>
                {data?.map((intercom) => {
                  return (
                    <IntercomOption intercom={intercom} key={intercom.nodeID} />
                  )
                })}
                {isFetching && (
                  <div className="absolute w-full h-full bg-purple-50 top-0 left-0 opacity-50"></div>
                )}
              </ComboboxList>
            )
          ) : (
            <span style={{ display: 'block', margin: 8 }}>
              Type at least 3 symbols
            </span>
          )}
        </ComboboxPopover>
      </Combobox>
    </>
  )
}
