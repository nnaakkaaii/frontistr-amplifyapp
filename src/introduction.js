import '../styles/Home.module.css'
import React from 'react'


function Introduction(props) {
    const h2 = {
        fontFamily: 'Times New Roman',
        textAlign: 'right',
    }
    const p = {
        fontFamily: 'Times New Roman',
        textAlign: 'right',
    }
    return (
        <div className="container my-5">
            <h2 style={h2}>FrontISTR Commons Data Reservoir.</h2>
            <div className="my-4">
                <p style={p}>Purpose of FCDR is to share data for benchmarking your FEM programs and linear equation solvers.</p>
                <p style={p}>This reservoir contains CAD data, FE Mesh data and Matrix data.</p>
                <p style={p}>Upload your data and/or submitting your report is always welcome.</p>
            </div>
        </div>
    )
}


export default Introduction
