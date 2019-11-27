import React from "react"
import Link from "next/link"
import NavigationWrapper from "../../../styles/Navigation"

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
