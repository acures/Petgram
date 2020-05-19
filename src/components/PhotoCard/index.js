import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { ImgWrapper, Img, Article } from './styles'
import { useLazyLoad } from '../../hooks/useLazyLoad'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { LIKE_ANONYMOUS_PHOTO } from '../../graphql/likeAnonymousPhoto'
import { FavButton } from '../FavButton'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCardComponent = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const [show, ref] = useLazyLoad()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [toggleLikePhoto] = useMutation(LIKE_ANONYMOUS_PHOTO, {
    variables: {
      input: { id }
    }
  })

  const handleFavClick = () => {
    if (!liked) toggleLikePhoto()
    setLiked(!liked)
  }

  return (
    <Article ref={ref}>
      {
        show && (
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
          </>
        )
      }
    </Article>
  )
}
