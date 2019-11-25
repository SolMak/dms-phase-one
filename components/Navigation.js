import React from "react"
import Link from "next/link"
import {useQuery, useMutation} from "@apollo/react-hooks"
import {READ_USER_QUERY} from "./User"
import NavigationWrapper from "../styles/Navigation"
import Signout from "./Signout"

const Navigation = () => {


    return (
        <NavigationWrapper>
            <Link href="/shop">
                <a>Shop</a>
            </Link>
        </NavigationWrapper>
    )
}

export default Navigation
