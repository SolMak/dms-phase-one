import React from "react"
import Router from "next/router"
import styled from "styled-components"
import NProgress from "nprogress"
import Logo from "./Logo"
import Slogan from "./Slogan"
import Navigation from "./Navigation"

Router.onRouteChangeStart = () => {
    NProgress.start()
}

Router.onRouteChangeComplete = () => {
    NProgress.done()
}

Router.onRouteChangeError = () => {
    NProgress.done()
}

const HeaderStyled = styled.header`
    .bar {
        border-bottom: 10px solid ${({theme}) => theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: left;
        align-items: stretch;

        @media (max-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }

    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid ${({theme}) => theme.lightGrey};
    }
`

const Header = () => {
    return (
        <HeaderStyled>
            <div className="bar">
                <Logo/>
                <Slogan/>
                <Navigation/>
            </div>

            <div className="sub-bar">
            </div>
        </HeaderStyled>
    )
}

export default Header
