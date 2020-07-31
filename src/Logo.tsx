import React from 'react'
import logo from './logo-text.svg'

export default function Logo() {
    let logoStyle = {
        height: "6rem",
        width: "100%"
    }
    return (
        <div className="Logo" style={ {textAlign: "center"} }>
            <img src={logo} alt='dice-e-roll' style={ logoStyle }/>
        </div>
    )
}
