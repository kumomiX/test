import { useQuery } from 'react-query'
import { client, gql } from 'libs/graphql'

export const fetchPosts = async (limit = 10) => {
  {
    const {
      devices: { data },
    } = await client.request(
      gql`
        query ($limit: Int!) {
          intercoms(limit: $limit) {
            ... on Intercom {
              motherboardID
              nodeID
              isOnline
            }
          }
        }
      `
    )
    return data
  }
}

export default function usePosts(limit) {
  return useQuery(['posts', limit], () => fetchPosts(limit))
}
