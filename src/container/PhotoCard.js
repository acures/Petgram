import React from 'react'
import ReactPlaceholder from 'react-placeholder'

import { useGetSinglePhoto } from '../graphql/getSinglePhoto'
import { PhotoCardComponent } from '../components/PhotoCard'
import { PhotoCardPlaceholder } from '../loader/PhotoCardLoader'

export const PhotoCard = ({ photoId }) => {
  const { loading, error, data } = useGetSinglePhoto(photoId)
  const { photo = {} } = data

  if (error) return 'Error'

  if (!photo.id && !loading) return 'No Existe'

  return (
    <ReactPlaceholder
      showLoadingAnimation
      ready={!loading}
      customPlaceholder={PhotoCardPlaceholder}
    >
      <PhotoCardComponent {...photo} />
    </ReactPlaceholder>

  )
}
