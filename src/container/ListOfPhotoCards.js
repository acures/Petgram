import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import { useGetPhotos } from '../graphql/getPhotos'
import { ListOFPhotoCardPlaceholder } from '../loader/ListOfPhotoCardsLoader'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data = { photos: [] } } = useGetPhotos(categoryId)

  if (error) return 'Error'

  return (
    <ReactPlaceholder
      showLoadingAnimation
      ready={!loading}
      customPlaceholder={ListOFPhotoCardPlaceholder}
    >
      <ListOfPhotoCardsComponent {...data} />
    </ReactPlaceholder>
  )
}
