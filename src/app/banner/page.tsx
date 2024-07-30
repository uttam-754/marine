"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import "./banner.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Banner = () => {

    const [inputValue, setInputValue] = useState("");
    
    const handleClick = () => {
        const call = ()=>{
            if(
                inputValue === ""
            )
            return true;
        }
        console.log(inputValue);
        setInputValue('')
    }

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
        
    }
    return (
        <>

            <div className="container">
                <div className="logo">
                    <Link href="https://marinefishaq.business.site">
                        <h1>Marine Fish AQ</h1>
                    </Link>
                </div>
                <div className="search_bar">
                    <input type="text"
                        value={inputValue}
                        onChange={handleChange} />
                    <div className="S_icon">
                        <button onClick={handleClick} ><img src="/search.png" alt="" /></button>
                    </div>
                </div>
                <div className="login">
                    <Link href={"/login"}>Login</Link>
                </div>
                <div className="icon">
                    <Link href="#" className="cart_icon">
                        <ShoppingCartIcon />
                    </Link>

                    <div className="menu_icon">
                        <MenuIcon />
                        <CloseIcon/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner
