import '../styles/Home.module.css'
import MyInput from "./my-input";
import React from "react";


export default function Card2(props) {
    const doCADFileChange = (e) => {
        if (e.target.files.length > 0) {
            props.setCadFileName(e.target.files[0].name)
            props.setCadFileSize(e.target.files[0].size)
        }
    }
    const doCADThumbnailChange = (e) => {
        if (e.target.files.length > 0) {
            props.setCadThumbnailName(e.target.files[0].name)
            props.setCadThumbnailSize(e.target.files[0].size)
        }
    }

    return (
        <div className="card my-2">
            <div className="card-header text-center">CAD file (Optional)</div>
            <div className="card-body">
                <div className="card-text">
                    <div className="form-group">
                        <label htmlFor="inputCADFile">■ CAD Geometry File</label>
                        <MyInput id="inputCADFile" onChange={doCADFileChange} upload={true} />
                        <small><p className="text-right">[.igs/.stl/.stp/.step] are allowed.</p></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCADThumbnail">■ CAD Sample Image</label>
                        <MyInput id="inputCADThumbnail" onChange={doCADThumbnailChange} upload={true} />
                        <small><p className="text-right">[.png/.jpg/.jpeg] are allowed.</p></small>
                    </div>
                </div>
            </div>
        </div>
    )
}
