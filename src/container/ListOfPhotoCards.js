import React from 'react'
import { useGetPhotos } from '../graphql/getPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { ListOfPhotoCardsSkeleton } from '../skeleton/ListOfPhotoCardsSkeleton'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data = { photos: [] } } = useGetPhotos(categoryId)

  if (loading) return <ListOfPhotoCardsSkeleton />

  if (error) return 'Error'

  return (
    <ListOfPhotoCardsComponent {...data} />
  )
}
