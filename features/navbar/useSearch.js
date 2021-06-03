import { useQuery } from 'react-query'
import { client, gql } from 'libs/graphql'

export const search = async (searchTerm = '192') => {
  const {
    search: { nodes },
  } = await client.request(
    gql`
      query search($search: String!) {
        search(search: $search) {
          nodes {
            ... on Intercom {
              nodeID
              motherboardID
              isOnline
            }
          }
        }
      }
    `,
    {
      search: searchTerm,
    }
  )
  return nodes
}

export default function useSearch(searchTerm) {
  return useQuery(['search', searchTerm], () => search(searchTerm), {
    enabled: searchTerm?.length >= 3,
  })
}
