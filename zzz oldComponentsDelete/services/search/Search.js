import React from "react"
import Downshift from "downshift"
import {resetIdCounter} from "downshift"
import {useLazyQuery} from "@apollo/react-hooks"
import {gql} from "apollo-boost"
import debounce from "lodash.debounce"
import {DropDown, DropDownItem, SearchStyles} from "../../styles"
import Router from "next/router"
 
const SEARCH_ITEMS_QUERY = gql`
    query SEARCH_ITEMS_QUERY($text: String!) {
        items(
            where: {
                OR: [{title_contains: $text}, {description_contains: $text}]
            }
        ) {
            id
            title
            image
        }
    }
`

const Search = () => {

    return (
        <p>Hello from Search</p>
    )
}

export default Search
