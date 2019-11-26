 import React from "react"
 import styled from "styled-components"

 const SloganStyled = styled.p`
    font-size: 2rem;
    margin-left: 2rem;

    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`

const Slogan = () => {
    return (
        <SloganStyled>
            This is the site slogan
        </SloganStyled>
    )
}

export default Slogan
