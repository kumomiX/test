import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox'
import '@reach/combobox/styles.css'
import styles from './Combobox.module.css'
import clsx from 'clsx'
import { forwardRef } from 'react'

const SearchIcon = () => (
  <svg
    className="absolute left-3 top-3.5 text-gray-500"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.51687 1.98486C10.6686 1.98486 13.2242 4.53978 13.2242 7.69216C13.2242 10.8445 10.6686 13.3995 7.51687 13.3995C4.36449 13.3995 1.80957 10.8445 1.80957 7.69216C1.80957 4.53978 4.36449 1.98486 7.51687 1.98486Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.2659 12.5005C13.7853 12.5005 14.2062 12.9221 14.2062 13.4408C14.2062 13.9608 13.7853 14.3818 13.2659 14.3818C12.7465 14.3818 12.325 13.9608 12.325 13.4408C12.325 12.9221 12.7465 12.5005 13.2659 12.5005Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const StyledComboboxInput = forwardRef(({ className, ...props }, ref) => {
  return (
    <div className="relative">
      <ComboboxInput
        type="search"
        className={clsx(
          'py-2.5 pr-3 pl-10 rounded-lg bg-gray-300 text-gray-600 border border-gray-200 hover:bg-gray-100 hover:border-gray-400 hover:shadow-input focus:border-primary-main active:border-gray-300 active:shadow-none focus:bg-gray-100  focus:shadow-input focus:text-gray-900 focus:outline-none',
          styles.input,
          className
        )}
        ref={ref}
        {...props}
      />
      <SearchIcon />
    </div>
  )
})

const StyledComboboxPopover = ({ className, children, ...props }) => (
  <ComboboxPopover
    className={clsx(
      'rounded-lg border !border-gray-900 !border-opacity-5 shadow-popover',
      className
    )}
    {...props}>
    {children}
  </ComboboxPopover>
)

export {
  StyledComboboxInput as ComboboxInput,
  Combobox,
  ComboboxList,
  ComboboxOption,
  StyledComboboxPopover as ComboboxPopover,
}
