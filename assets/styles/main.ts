import styled from 'styled-components'
import A from '../../components/A'
import { Field } from 'formik'

export const Row = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 50px;
  }

  & > *:first-child {
    margin-left: 0;
  }
`

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 1.5rem 0;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 6px rgb(0 0 0 / 15%);
  -webkit-transition: box-shadow 0.2s ease;
  transition: box-shadow 0.2s ease;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const CommentButton = styled.button`
  -webkit-font-smoothing: subpixel-antialiased;
  background: #15171a;
  border-radius: .5rem;
  color: #fff !important;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1em;
  outline: none;
  padding: 0.8rem 1.1rem;
  text-align: center;
  text-decoration: none !important;
  transition: all .4s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
`

export const Icon = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`

export const BigButton = styled(A)`
  position: fixed;
  margin: 10px;
  bottom: 0;
  right: 0;
  color: white;
  text-decoration: none;
  padding: 0 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #15171A;
  height: 60px;
  min-width: 60px;
  box-shadow: rgb(0 0 0 / 24%) 0 8px 16px -2px;
  border-radius: 999px;
  transition: opacity 0.3s ease;
`

export const Post = styled(A)`
  display: block;
  padding: 20px;
  text-decoration: none;
  grid-column: ${({ col, span }) => `col ${col} / span ${span}`};
  grid-row: ${({ row }) => `row ${row}`};
  margin: 1.5rem 0;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 6px rgb(0 0 0 / 15%);
  -webkit-transition: box-shadow 0.2s ease;
  transition: box-shadow 0.2s ease;
`

export const PostTitle = styled.div`
  font-size: 25px;
  text-align: center;
`

export const PostBody = styled.div`
  font-size: 15px;
  text-align: justify;
`

export const GridTwo = styled.div`
  display: grid;
  grid-template-rows: [row] auto [row] auto [row];
  grid-gap: 20px;
`

export const Main = styled.div`
  margin: 50px;
  font-size: 100px;
  text-align: center;
`

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 1.5rem 0;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 6px rgb(0 0 0 / 15%);
  -webkit-transition: box-shadow 0.2s ease;
  transition: box-shadow 0.2s ease;
  align-items: center;

  & > * {
    margin: 5px;
  }
`

export const Input = styled(Field)`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid black;
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
`
