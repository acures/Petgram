import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetSinglePhoto = id => {
  const { loading, error, data = { photo: {} } } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id
    }
  })

  return { loading, error, data }
}
