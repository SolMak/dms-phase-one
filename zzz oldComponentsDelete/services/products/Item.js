import React from "react"


const Item = ({item}) => {
    const {id, title } = item
    const image = item.featuredImage && item.featuredImage.mediaItemUrl || " "
    const description = "This is some kind of a description for all products"  // item.content
    const price = "12.99"
    const slug = item.slug

    return (
        <>    
        {image && <img src={image} alt={title}/>}
        <p>{title}</p>
        <p>{description}</p>
        </>
    )
}
export default Item
