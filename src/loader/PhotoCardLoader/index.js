import React from 'react'
import { TextBlock, RectShape, RoundShape } from 'react-placeholder/lib/placeholders'
import { WrapperLiked } from './styles'

export const PhotoCardPlaceholder = (
  <>
    <RectShape
      color='#EEEEEE'
      style={{
        height: 275,
        marginBottom: 10,
        borderRadius: 10,
        boxShadow: '0 5px 7px rgba(0, 0, 0, .1)'
      }}
    />
    <WrapperLiked>
      <RoundShape
        color='#EEEEEE'
        style={{ width: 40, height: 40, marginLeft: 5, marginRight: 5 }}
      />
      <TextBlock
        color='#EEEEEE'
        rows={1}
        style={{ width: 120 }}
      />
    </WrapperLiked>
  </>
)
