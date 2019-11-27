import React from "react"
import PropTypes from "prop-types"
import {useQuery, useMutation} from "@apollo/react-hooks"
import {gql} from "apollo-boost"
import {CartStyles} from "../../styles"


const Cart = () => {
    return (
        <CartStyles>
            <p>Hello from cart</p>
        </CartStyles>
    )
}

Cart.propTypes = {
    open: PropTypes.bool,
}

export default Cart
