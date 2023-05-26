import styled, { css } from 'styled-components'

interface IImage {
  hasBorder?: boolean
}

export const Image = styled.img<IImage>`
  ${({ hasBorder }) =>
    hasBorder
      ? css`
          width: calc(3rem + 12px);
          height: calc(3rem + 12px);
          border-radius: 8px;
          border: 4px solid ${({ theme }) => theme.colors.gray_800};
          outline: 2px solid ${({ theme }) => theme.colors.green_500};
        `
      : css`
          width: 3rem;
          height: 3rem;
          border-radius: 8px;
        `}
`
