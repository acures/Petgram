import React from 'react'
import { PhotoCardSkeleton } from '../PhotoCardSkeleton'

const DEFAULT_LIST = [1, 2, 3, 4, 5, 6, 7, 8]

export const ListOfPhotoCardsSkeleton = () => {
  return (
    <>
      {DEFAULT_LIST.map(photo => (
        <PhotoCardSkeleton key={photo} />
      ))}
    </>
  )
}
