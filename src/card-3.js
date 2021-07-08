import '../styles/Home.module.css'
import MyInput from "./my-input";
import React from "react";


export default function Card3(props) {
    const doFemFileChange = (e) => {
        if (e.target.files.length > 0) {
            props.setFemFileName(e.target.files[0].name)
            props.setFemFileSize(e.target.files[0].size)
        }
    }
    const doFemThumbnailChange = (e) => {
        if (e.target.files.length > 0) {
            props.setFemThumbnailName(e.target.files[0].name)
            props.setFemThumbnailSize(e.target.files[0].size)
        }
    }
    const doElementTypeChange = (e) => {
        if (e.target.value) {
            props.setElementType(e.target.value)
        }
    }
    const doElementCountChange = (e) => {
        if (e.target.value > 0) {
            props.setElementCount(e.target.value)
        }
    }
    const doNodeCountChange = (e) => {
        if (e.target.value > 0) {
            props.setNodeCount(e.target.value)
        }
    }
    return (
        <div className="card my-2">
            <div className="card-header text-center">FEM file (Optional)</div>
            <div className="card-body">
                <div className="card-text">
                    <div className="form-group">
                        <label htmlFor="inputFEMFile">■ FEM Mesh File</label>
                        <MyInput id="inputFEMFile" onChange={doFemFileChange} />
                        <small><p className="text-right">[.frd] are allowed.</p></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputFEMThumbnail">■ FEM Sample Image</label>
                        <MyInput id="inputFEMThumbnail" onChange={doFemThumbnailChange} />
                        <small><p className="text-right">[.png/.jpg] are allowed.</p></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputElementType">■ FEM Element Type</label>
                        <select className="form-control" id="inputElementType" onChange={doElementTypeChange}>
                            <option value="" />
                            <option value="segment">segment</option>
                            <option value="triangle">triangle</option>
                            <option value="quadrangle">quadrangle</option>
                            <option value="tetrahedron">tetrahedron</option>
                            <option value="hexahedron">hexahedron</option>
                            <option value="pentahedron">pentahedron</option>
                            <option value="pyramid">pyramid</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputElementCount">■ FEM Element Count</label>
                        <input type="number" className="form-control" id="inputElementCount" placeholder="the number of FEM Element" onChange={doElementCountChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputNodeCount">■ FEM Node Count</label>
                        <input type="number" className="form-control" id="inputNodeCount" placeholder="the number of FEM Node" onChange={doNodeCountChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
