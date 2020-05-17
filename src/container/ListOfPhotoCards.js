import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_PHOTOS } from '../graphql/getPhotos'
import { Loader } from '../components/Loader'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data = { photos: [] } } = useQuery(GET_PHOTOS, {
    variables: {
      categoryId: categoryId
    }
  })

  if (loading) return <Loader />

  if (error) return 'Error'

  return (
    <ListOfPhotoCardsComponent {...data} />
  )
}
