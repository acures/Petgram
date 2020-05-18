import React from 'react'
import { WrapperLiked, WrapperPhoto } from './styles'
import { TextBlock, RectShape, RoundShape } from 'react-placeholder/lib/placeholders'

const DEFAULT_LIST = [1, 2, 3, 4, 5]

export const ListOFPhotoCardPlaceholder = (
  <>
    {
      DEFAULT_LIST.map(photo => (
        <WrapperPhoto key={photo}>
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
        </WrapperPhoto>
      ))
    }
  </>
)
