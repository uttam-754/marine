import React from 'react'
import "./service.css"
import MainItem from "./api.js"
const MainItems = () => {
    return (
        <>
            <div className="box">
                {MainItem.map((val) => {
                    const {id, img, name}=val;
                    return (
                        <>
                            <div className="frame" key={id}>
                                <img src={img} alt="" />
                                <h2>{name}</h2>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}

export default MainItems;
