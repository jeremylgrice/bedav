import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Summary from './Summary'

const HeaderContainer = styled.div`
  margin-bottom: 40px;
`

function Header(props) {
  return (
    <HeaderContainer>
      <Heading country={props.country}/>
      <Summary country={props.country}/>
    </HeaderContainer>
  )
}

export default Header
