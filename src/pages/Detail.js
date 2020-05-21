import React from 'react'
import { PhotoCard } from '../container/PhotoCard'

export const Detail = ({ detailId }) => {
  return (
    <div>
      <PhotoCard photoId={detailId} />
    </div>
  )
}
