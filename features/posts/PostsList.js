import usePosts from './usePosts'

export default function PostsList({ ...props }) {
  const { isLoading, isError, error, isFetching, data } = usePosts()

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <ul className="relative">
      {/* {data.map(({ id, title }, idx) => (
        <li key={id} className="px-4 py-1 flex flex-col">
          <span className="font-bold">post #{idx}</span> {title}
        </li>
      ))}
      {isFetching && (
        <div className="absolute w-full h-full bg-purple-50 top-0 left-0 opacity-50" />
      )} */}
    </ul>
  )
}
