// getNodeIDByMBID
import { useQuery } from 'react-query'
import { client, gql } from 'libs/graphql'

export const getNodeIDByMBID = async (motherboardID) => {
  const { getNodeIDByMBID } = await client.request(
    gql`
      query nodeID($motherboardID: MotherboardID!) {
        getNodeIDByMBID(motherBoardID: $motherboardID)
      }
    `,
    {
      motherboardID: motherboardID,
    }
  )
  return getNodeIDByMBID
}

export const getNode = async (nodeID) => {
  const {
    nodes: [data],
  } = await client.request(
    gql`
      query nodes($nodeIDs: [NodeID!]!) {
        nodes(nodeIDs: $nodeIDs) {
          ... on Intercom {
            motherboardID
            manufactureVersions {
              swVersion
              hwVersion
              bleVersion
            }
            isOnline
          }
        }
      }
    `,
    {
      nodeIDs: [nodeID],
    }
  )
  return data
}

export default function useIntercom(motherboardID) {
  const { data: nodeID } = useQuery(
    ['getNodeIDByMBID', motherboardID],
    () => getNodeIDByMBID(motherboardID),
    {
      enabled: motherboardID !== null && motherboardID !== undefined,
    }
  )

  return useQuery(['nodes', nodeID], () => getNode(nodeID), {
    enabled: !!nodeID,
  })
}
