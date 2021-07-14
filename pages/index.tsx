import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'

const Main = styled.div`
  margin: 50px;
  font-size: 100px;
  text-align: center;
`

const Index = () => (
	<>
		<Header />
		<Main>Main</Main>
	</>
)

export default Index