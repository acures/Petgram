import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetPhotos = categoryId => {
  const { loading, error, data = { photos: [] } } = useQuery(GET_PHOTOS, {
    variables: {
      categoryId
    }
  })

  return { loading, error, data }
}
