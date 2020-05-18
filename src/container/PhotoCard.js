import React from 'react'
import { useGetSinglePhoto } from '../graphql/getSinglePhoto'
import { PhotoCardComponent } from '../components/PhotoCard'
import { Loader } from '../components/Loader'

export const PhotoCard = ({ photoId }) => {
  const { loading, error, data } = useGetSinglePhoto(photoId)
  const { photo = {} } = data

  if (loading) return <Loader />

  if (error) return 'Error'

  return <PhotoCardComponent {...photo} />
}
