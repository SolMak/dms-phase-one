import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {ThemeProvider} from "styled-components"
import ContentArea from "./body/content/contentArea"
import Sidebar from "./body/sidebar/Sidebar"
import Footer from "../layout/body/footer/Footer"
import MetaHead from "./meta/MetaHead"
import MetaFoot from "./meta/MetaFoot"
import Header from "./body/header/Header"
import GlobalStyles from "../styles/GlobalStyles"
import theme from "../styles/theme"

const PageWrapper = styled.div`
    background: white;
    color: ${({theme}) => theme.black};
`

const Container = styled.div`
    max-width: ${({theme}) => theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <PageWrapper>
                <MetaHead />
                <Header />
                <GlobalStyles />
                <Container>
                    <ContentArea>
                        <Sidebar />
                        {children}
                        <Footer />
                    </ContentArea>
                    <MetaFoot />
                </Container>
            </PageWrapper>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
