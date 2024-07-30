import React from 'react'
import Link from 'next/link'
import "./menu.css"

const Menu = () => {
    return (
        <>
            <div className="menu">
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/product'}>Products</Link>
                    </li>
                    <li>

                        <Link href={''}>Gallary</Link>
                    </li>
                    <li>

                        <Link href={''}>Account</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu
