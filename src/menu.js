import '../styles/Home.module.css'
import React from 'react'


function Menu(props) {
    return (
        <div>
            <ul className="nav nav-pills my-3">
                <li className="nav-item">
                    <button className={props.mode === 'search' ?"nav-link btn active":"nav-link btn"} onClick={props.onSearchClick} >Search</button>
                </li>
                <li className="nav-item">
                    <button className={props.mode === 'upload' ?"nav-link btn active":"nav-link btn"} onClick={props.onUploadClick} >Upload</button>
                </li>
                <li className="nav-item">
                    <button className={props.mode === 'download' ?"nav-link btn active":"nav-link btn"} onClick={props.onDownloadClick} >Download</button>
                </li>
            </ul>
        </div>
    )
}


export default Menu
