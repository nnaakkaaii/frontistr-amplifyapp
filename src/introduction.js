import '../styles/Home.module.css'
import React from 'react'


function Introduction(props) {
    const h2 = {
        fontFamily: 'Times New Roman',
        textAlign: 'right',
    }
    return (
        <div className="container my-5">
            <h2 style={h2}>FrontISTR Commons Data Reservoir.</h2>
        </div>
    )
}


export default Introduction
