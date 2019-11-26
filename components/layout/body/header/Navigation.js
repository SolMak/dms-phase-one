import React from "react"
import Link from "next/link"
import {useQuery, useMutation} from "@apollo/react-hooks"
import {READ_USER_QUERY} from "../../../services/user/User"
import NavigationWrapper from "../../../styles/Navigation"
import Signout from "../../../services/auth/Signout"

const Navigation = () => {


    return (
        <NavigationWrapper>
            <Link href="/shop">
                <a>Hello from Navigation</a>
            </Link>
        </NavigationWrapper>
    )
}

export default Navigation
