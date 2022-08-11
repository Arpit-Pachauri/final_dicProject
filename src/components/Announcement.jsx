import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
height:30px;
background-color: #9BB7D4;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;
`

const Announcement = () => {
  return (
    <Container>Super Awsome Deal on Order Above Rs1000</Container>
  )
}

export default Announcement