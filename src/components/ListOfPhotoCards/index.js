import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { PhotoCard } from '../PhotoCard'
import { Loader } from '../Loader'
import { GET_PHOTOS } from '../../graphql/getPhotos'

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(GET_PHOTOS)

  if (loading) return <Loader />

  if (error) return 'Error'

  return (
    <ul>
      {
        data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}
