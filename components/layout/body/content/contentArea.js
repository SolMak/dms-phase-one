import React from "react"
import styled from "styled-components"

const Container = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
`
 
const ContentArea = ({children}) => {  
    return (
        <Container>
            Hi from Content Area
            {children}
            Hi again from Content Area
        </Container>
    )
}

export default ContentArea