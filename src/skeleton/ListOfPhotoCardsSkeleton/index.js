import React from 'react'
import { PhotoCardSkeleton } from '../PhotoCardSkeleton'

const DEFAULT_LIST = [1, 2, 3, 4]

export const ListOfPhotoCardsSkeleton = () => {
  return (
    <>
      {DEFAULT_LIST.map(photo => (
        <PhotoCardSkeleton key={photo} />
      ))}
    </>
  )
}
