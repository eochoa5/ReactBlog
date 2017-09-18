import React from 'react'
import styled from 'styled-components'

export const Header = styled.header`
text-align:center;
font-size:2em;
background:#090254;
color:white;
width:100%;
font-family: 'Roboto', sans-serif;
height: 50px;
line-height: 50px;

`

export const Container = styled.div`
    text-align:center;
    width:100%;
    min-height: 90vh;
     
`

export const  Main = (props)=>{
    return(
        <Container>
            {props.children}
        </Container>
    )
}