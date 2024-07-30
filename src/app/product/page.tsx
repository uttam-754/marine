"use client"
import React, { useState } from 'react'
import "./product.css"
import Link from 'next/link'
import Products from "./api.js"
import Items from './item/api'
import Item from './item/page'

const uniqueData = [new Set (Items.map((Elem) => {
    return Elem.category;

}))
];
console.log(uniqueData)

const Product = () => {
    const [data, setData]=useState("")

    const filter = (category: string) =>{
        const updateList = Items.filter((curElem) =>{
            return (curElem.category === category)
        })
        
    };
    
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
                                <div className="product_frame">
                                    <div className="proInfo" key={id} onClick={() => {filter(name)}}>
                                        <Link href={"/product/item"}>
                                            <img src={img} alt="" />
                                            <h4>{name}</h4>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
            {/* <Item userData={data}/> */}
        </>
    )
}


export default Product;
