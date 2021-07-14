import styled from 'styled-components'
import A from '../../components/A'
import { BlackButtonStyle, CardStyle } from './common'

export const Post = styled(A)`
  display: block;
  text-decoration: none;
  grid-column: ${({ col, span }) => `col ${col} / span ${span}`};
  grid-row: ${({ row }) => `row ${row}`};
  ${CardStyle};
`

export const PostTitle = styled.div`
  font-size: 25px;
  text-align: center;
`

export const PostBody = styled.div`
  font-size: 15px;
  text-align: justify;
`

export const GridTemplate = styled.div`
  display: grid;
  grid-template-rows: [row] auto [row] auto [row];
  grid-gap: 20px;
`

export const CreatePostBtn = styled(A)`
  position: fixed;
  margin: 10px;
  bottom: 0;
  right: 0;
  ${BlackButtonStyle};
`
