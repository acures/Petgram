import React from 'react'
import { PhotoCardSkeleton } from '../skeleton/PhotoCardSkeleton'
import { useGetSinglePhoto } from '../graphql/getSinglePhoto'
import { PhotoCardComponent } from '../components/PhotoCard'

export const PhotoCard = ({ photoId }) => {
  const { loading, error, data } = useGetSinglePhoto(photoId)
  const { photo = {} } = data

  if (loading) return <PhotoCardSkeleton />

  if (error) return 'Error'

  if (!photo.id && !loading) return 'No Existe'

  return (
    <PhotoCardComponent {...photo} />
  )
}
