import React from 'react'
import "./display.css"
const Display = () => {
    return (
        <>
            <div className="hero_content">
                <div className="hero">
                    <h2> Fish Tank <br /> <span className="tank">Save up to</span> <span className="discount"> 20%</span> </h2>
                    <h1>
                        <span>Genuine Products</span>
                        <span>Free Shipping</span>
                    </h1>
                    <a href="#" className="btn">Shop now</a>
                </div>
                <div className="hero_img">
                    <img src="/fish/fish.png" alt="" />
                </div>
            </div>
        </>
    )
}


export default Display
