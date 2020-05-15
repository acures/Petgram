import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${time} ${fadeInKeyframes} ${type};`

const rotateKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
      transform: rotate(360deg);
  }
`

export const rotate = () => css`animation: 1.2s ${rotateKeyframe} linear infinite`
