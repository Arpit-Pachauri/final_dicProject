import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height:30px;
background-color: purple;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;
`

const Announcement = () => {
  return (
    <Container>Welcome to WEBFLOW</Container>
  )
}

export default Announcement