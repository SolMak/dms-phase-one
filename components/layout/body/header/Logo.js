 import styled from "styled-components"
 import Link from "next/link"

 const LogoStyled = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg); 

    a {
        padding: 0.5rem 0rem;
        background: ${({theme}) => theme.red};
        color: white;
        transform: uppercase;
        text-decoration: none;
    }

    @media (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`

const Logo = () => {
    return (
        <LogoStyled>
            <Link href="/">
                <a>Domain Spark</a>
            </Link>
        </LogoStyled>
    )
}

export default Logo
