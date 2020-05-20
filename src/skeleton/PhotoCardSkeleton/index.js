import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { WrapperDescription, Liked } from './styles'

export const PhotoCardSkeleton = () => {
  return (
    <>
      <Skeleton height={285} />
      <WrapperDescription>
        <Liked>
          <Skeleton circle height={30} width={30} />
        </Liked>
        <Skeleton width={100} />
      </WrapperDescription>
    </>
  )
}
