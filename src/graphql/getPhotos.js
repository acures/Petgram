import { gql } from 'apollo-boost'

export const GET_PHOTOS = gql`
    query getPhotos {
    photos {
        id
        categoryId
        src
        likes
        userId
        liked
    }
    }
`
