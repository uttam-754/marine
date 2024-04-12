"use client"
import React, { useState } from 'react'
import "./item.css"
import Items from "./api"
const Item = () => {

    const [clickData, setClickData] = useState('null');
    const getData = document.getElementById("P_data")
    console.log(getData);
    return (

        <>


            <div className="cont">
                {Items.map((vall) => {
                    const airpump= vall.airpump;
                    const filter = vall.p_filter;
                    const [ {id, b_name, model, des, price }] =airpump;
                    return (
                        <>
                            <div className="con">
                                <div className="item_frame" id='P_data'>
                                    <img src="/filter/880f.png" alt="" />
                                    <h4>{des}</h4>
                                    <span>&rupee;</span>
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
