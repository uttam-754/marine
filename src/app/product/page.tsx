import React from 'react'
import "./product.css"
import Link from 'next/link'
import Products from "./api.js"
const Product = () => {
    return (
        <>
            <div className="contain">
                <div className="side_bar">
                    <h2>catagory</h2>
                </div>
                
                <div className="prodt_box">
                    {Products.map((vall) => {
                        const {id, img, name}= vall
                        return (
                            <>
                                <div className="product_frame"key={id}>
                                    <Link href={"/product/item"}>
                                        <img src={img} alt="" />
                                        <h4>{name}</h4>
                                    </Link>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Product
