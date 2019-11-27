import React from "react"
import App from "next/app"
import Layout from "../components/Layout/Layout"
import {ApolloProvider} from "@apollo/react-hooks"
import withApollo from "../lib/apollo-init/with-apollo"

class MyApp extends App {
    render() {
        const {Component, pageProps, apolloClient} = this.props

        return (
            <ApolloProvider client={apolloClient}>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </ApolloProvider> 
        )
    }
}
 
export default withApollo(MyApp)
