import React, { useRef, useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { ImgWrapper, Img, Button, Article } from './styles'
import { useLazyLoad } from '../../hooks/useLazyLoad'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const ref = useRef(null)
  const { show } = useLazyLoad(ref)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return JSON.parse(like)
    } catch (e) {
      console.log(e)
    }
  })

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.error(e)
    }
  }

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

            <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size='32px' /> {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
