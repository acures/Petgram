import styled from 'styled-components'
import { rotate } from '../../styles/animation'

export const Circle = styled.div`
    display: flex;
    flex-direction: column;
    height: 90px;
    width: 90px;
    padding: 0 12px;

    &:after {
    content: " ";
    display: block;
    width: 70px;
    height: 70px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fdd;
    border-color: #fdd transparent #fdd transparent;
    ${rotate}
  }
`
