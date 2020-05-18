import React from 'react'
import { useGetPhotos } from '../graphql/getPhotos'
import { Loader } from '../components/Loader'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data = { photos: [] } } = useGetPhotos(categoryId)

  if (loading) return <Loader />

  if (error) return 'Error'

  return <ListOfPhotoCardsComponent {...data} />
}
