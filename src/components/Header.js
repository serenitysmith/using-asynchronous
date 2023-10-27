import React from "react"
import Troll from './troll.png'
export default function Header() {
    return (
        <header className="header">
            <img 
                src={Troll} alt=""
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            
        </header>
    )
}