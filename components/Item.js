import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import {formatPrice} from "../utils/money"
import {ItemWrapper, ItemTitle, ItemButtons, PriceTag} from "../styles"

const Item = ({item}) => {
    const {id, title } = item
    const image = item.featuredImage && item.featuredImage.mediaItemUrl || " "
    const description = "This is some kind of a description for all products"  // item.content
    const price = "12.99"
    const slug = item.slug

    console.log(item)

    return (
        <ItemWrapper>
            {image && <img src={image} alt={title}/>}
            <ItemTitle>
                    <a>{title}</a>
            </ItemTitle>
            <PriceTag>{formatPrice(price)}</PriceTag>
            <p>{description}</p>
            <ItemButtons>
                <a>Edit ✍🏼</a>
            </ItemButtons>
        </ItemWrapper>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Item
