import React from 'react'
import "./deal.css"
import Today_Deal from "../Today_deal_Api"

const Today_deal = () => {
    const Cal_percent = (Mrp: number, Discount: number) => {
        
        return (
         (Discount / Mrp) * 100
         
        );
        
    }
    
    Cal_percent(60, 40);
    return (
        <>
            <div className="bg">
                <div className="text_line">
                    <h2>Today's Deals</h2>
                    <span>See all deals</span>
                </div>
                <div className="containr">
                    {Today_Deal.map((value) => {
                        const { img, mrp, discount, proName } = value;
                        console.log(value)
                        const roundup = Math.ceil(Cal_percent(mrp,discount))
                        return (
                            <>
                                <div className="frame1">
                                    <div className="pic">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="off_percent">
                                        <span>{roundup}% off</span>
                                        <h4> Limited time deal </h4>
                                    </div>
                                    
                                    <div className="price">
                                        <h3>₹ {discount}</h3>
                                        <h4>M.R.P.: <span>₹{mrp}</span></h4>
                                    </div>
                                    <div className="Pname">
                                        <h3>{proName}</h3>
                                    </div>
                                </div>
                            </>
                        )

                    })}

                </div>
            </div>
        </>
    )
}

export default Today_deal
