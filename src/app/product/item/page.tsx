"use client"
import React, { useState } from 'react'
import "./item.css"
import Items from "./api"


const Item = () => {
    
    return (

        <>


            <div className="cont">
                {Items.map((vall) => {
                    const {id, b_name, model, des, img, price } =vall;
                    return (
                        <>
                            <div className="con">
                                <div className="item_frame" id='P_data' key={id}>
                                    <img src={img} alt="" />
                                    <h2>{b_name}</h2>
                                    <h3>{model}</h3>
                                    <h4>{des}</h4>

                                    <span>&rupee;{price}</span>
                                </div>
                            </div>
                        </>
                    );
                })}

            </div>
        </>

    )

}


export default Item;
