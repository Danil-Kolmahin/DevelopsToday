import styled from 'styled-components'

export const CardStyle = `
  padding: 20px;
  margin: 1.5rem 0;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  box-shadow: 0 2px 6px rgb(0 0 0 / 15%);
  -webkit-transition: box-shadow 0.2s ease;
  transition: box-shadow 0.2s ease;
`

export const BlackButtonStyle = `
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

export const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const Icon = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`

export const BlackButton = styled.button`
	${BlackButtonStyle};
`
