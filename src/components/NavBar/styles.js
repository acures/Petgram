import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items: center;
  background: #FCFCFC;
  border-top: 1px solid #E0E0E0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  width: 100%;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {
    color: #000;

    &::after {
      ${fadeIn({ time: '0.5s' })};
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`
