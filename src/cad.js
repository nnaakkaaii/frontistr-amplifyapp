import '../styles/Home.module.css'
import React from 'react'
import Item from './item'


function Cad(props) {
    let data = props.cads.map((cad, id) =>
        <Item id={id} value={cad} mode={props.mode} downloads={props.downloads} setDownloads={props.setDownloads} />
    )

    return (
        <div className="table-responsive">
            <table className="table my-5">
                <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">CAD</th>
                    <th className="text-center">FrontISTR Data</th>
                    <th className="text-center">Matrix (A, b)</th>
                    <th className="text-center">Description</th>
                </tr>
                </thead>
                <tbody>{data}</tbody>
            </table>
        </div>
    )
}


export default Cad
