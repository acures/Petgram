import React, { useRef } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { ImgWrapper, Img, Button, Article } from './styles'
import { useLazyLoad } from '../../hooks/useLazyLoad'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const ref = useRef(null)
  const { show } = useLazyLoad(ref)

  return (
    <Article ref={ref}>
      {
        show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button>
              <MdFavoriteBorder size='32px' /> {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
