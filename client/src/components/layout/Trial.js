import React, { Fragment } from 'react'
import styled from 'styled-components';
import AudioPlayer from '../player/AudioPlayer';


const Container = styled.div`
box-sizing: border-box;
width: 90%;
max-width: 1080px;
margin: 0 auto;
text-align: center;

`

const Title = styled.h1`
width: 100%;
text-align: center;
font-family: 'PT Sans', sans-serif;
font-size: 73px;
font-weight: 700;
color: #00DEBC;

@media(max-width: 800px) {
   padding-top: 30px;
   font-size: 50px;
   margin: 0 auto;
}
`



const Trial = () => {
   return (
    <Fragment>
       <Container>
          <Title>Welcome to sleepmode.fm</Title>
       </Container>
       <AudioPlayer/>
    </Fragment>
  
  )}
 
  

export default Trial;