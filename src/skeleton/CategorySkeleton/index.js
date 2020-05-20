import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Item } from './styles'

export const CategorySkeleton = () => {
  return (
    <Item>
      <Skeleton circle height={75} width={75} />
      <Skeleton circle height={20} width={20} />
    </Item>
  )
}
