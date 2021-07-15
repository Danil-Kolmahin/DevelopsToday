import styled from 'styled-components'
import { Field, Form } from 'formik'
import { CardStyle } from './common'

export const FormCard = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${CardStyle};
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
