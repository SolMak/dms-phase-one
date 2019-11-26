import React from "react"
import App from "next/app"
import Page from "../components/Page"
import {ApolloProvider} from "@apollo/react-hooks"
import withApollo from "../init/with-apollo"

class MyApp extends App {
    render() {
        const {Component, pageProps, apolloClient} = this.props

        return (
            <ApolloProvider client={apolloClient}>
                <Page>
                    <Component {...pageProps}/>
                </Page>
            </ApolloProvider> 
        )
    }
}
 
export default withApollo(MyApp)
