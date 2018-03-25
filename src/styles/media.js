import {css} from 'styled-components';

const sizes = {
    xs:768,
    md:1100,
    lg:1800
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {});