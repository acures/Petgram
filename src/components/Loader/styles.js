import styled from 'styled-components'
import { rotate } from '../../styles/animation'

// export const Anchor = styled.a`
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     text-decoration: none;
//     width: 75px;
// `

// export const Image = styled.img`
//     border: 1px solid #ddd;
//     box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
//     border-radius: 50%;
//     height: auto;
//     overflow: hidden;
//     object-fit: cover;
//     height: 75px;
//     width: 75px;
// `

export const Circle = styled.div`
    display: flex;
    flex-direction: column;
    height: 75px;
    width: 75px;

    &:after {
    content: " ";
    display: block;
    width: 60px;
    height: 60px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fdd;
    border-color: #fdd transparent #fdd transparent;
    ${rotate}
  }
`
