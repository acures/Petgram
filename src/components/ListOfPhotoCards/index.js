import React from 'react'
import { PhotoCardComponent } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ photos }) => (
  <ul>
    {
      photos.map(photo => <PhotoCardComponent key={photo.id} {...photo} />)
    }
  </ul>
)
