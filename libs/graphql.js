import { GraphQLClient } from 'graphql-request'
const endpoint = 'https://api.k8s.sputnik.systems/query'

export const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization:
      'Bearer 96244f71.eyJhbGciOiJIUzI1NiJ9.eyJlbnRpdHlfdXVpZCI6IjU5IiwiZW50aXR5X3R5cGUiOiJ1c2VyIiwiZW50aXR5X3JlZl91dWlkIjoiYjE3ODJlNGYtOTE5OC00OWQxLWI1YWEtN2JkYmE5Yzg3ZDIxIiwiZW50aXR5X25hbWUiOm51bGwsInNhbHQiOiI5NjI0NGY3MSJ9.MJCEQ5XssVbukAXf1klX62IHdWzj0JcpIhdVv_kMsMg',
  },
})
export { gql } from 'graphql-request'
