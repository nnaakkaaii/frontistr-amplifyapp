import '../styles/Home.module.css'
import MyInput from "./my-input";
import React from "react";


export default function Card4(props) {
    const doMatrixFileChange = (e) => {
        if (e.target.files.length > 0) {
            props.setMatrixFileName(e.target.files[0].name)
            props.setMatrixFileSize(e.target.files[0].size)
        }
    }
    const doMatrixThumbnailChange = (e) => {
        if (e.target.files.length > 0) {
            props.setMatrixThumbnailName(e.target.files[0].name)
            props.setMatrixThumbnailSize(e.target.files[0].size)
        }
    }
    return (
        <div className="card my-2">
            <div className="card-header text-center">Matrix file (Optional)</div>
            <div className="card-body">
                <div className="card-text">
                    <div className="form-group">
                        <label htmlFor="inputMatrixFile">■ Matrix File</label>
                        <MyInput id="inputMatrixFile" onChange={doMatrixFileChange} />
                        <small><p className="text-right">[.csr/.ill] are allowed.</p></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMatrixThumbnail">■ Matrix Sample Image</label>
                        <MyInput id="inputMatrixThumbnail" onChange={doMatrixThumbnailChange} />
                        <small><p className="text-right">[.png/.jpg/.jpeg] are allowed.</p></small>
                    </div>
                </div>
            </div>
        </div>
    )
}