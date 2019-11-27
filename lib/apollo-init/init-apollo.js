import {ApolloClient} from "apollo-client"
import {InMemoryCache} from "apollo-cache-inmemory"
import {HttpLink} from "apollo-link-http"
import {onError} from "apollo-link-error"
import {ApolloLink} from "apollo-link"
import fetch from "isomorphic-unfetch"

let apolloClient = null

function create(initialState) {
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    const isBrowser = typeof window !== "undefined"
    const cache = new InMemoryCache().restore(initialState || {})

    cache.writeData({
        data: {
            isCartOpen: false,
        },
    })

    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
        link: ApolloLink.from([
            onError(({graphQLErrors, networkError}) => {
                if (graphQLErrors)
                    graphQLErrors.forEach(({message, locations, path}) =>
                        console.log(
                            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                        ),
                    )
                if (networkError)
                    console.log(`[Network error]: ${networkError}`)
            }),
            new HttpLink({
                uri: process.env.server.url || "http://localhost/graphql", // Server URL (must be absolute)
                credentials: "", // Additional fetch() options like `credentials` or `headers`
                // Use fetch() polyfill on the server
                fetch: !isBrowser && fetch,
                fetchOptions: {
                    mode: "no-cors",
                },
            }),
        ]),
        cache,
        resolvers: {
            Mutation: {
                toggleCart: (root, args, {cache}) => {
                    const {isCartOpen} = true

                    const data = {isCartOpen: !isCartOpen}
                    cache.writeData({data})
                    return data
                },
            },
        },
    })
}

const initApollo = function (initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === "undefined") {
        return create(initialState)
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState)
    }

    return apolloClient
}

export default initApollo
