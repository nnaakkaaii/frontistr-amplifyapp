import '../styles/Home.module.css'
import MyInput from "./my-input";
import React from "react";


export default function Card3(props) {
    const doFemFileChange = (e) => {
        if (e.target.files.length > 0) {
            props.setFemFile(e.target.files[0])
        }
    }
    const doCntFileChange = (e) => {
        if (e.target.files.length > 0) {
            props.setCntFile(e.target.files[0])
        }
    }
    const doDatFile1Change = (e) => {
        if (e.target.files.length > 0) {
            props.setDatFile1(e.target.files[0])
        }
    }
    const doDatFile2Change = (e) => {
        if (e.target.files.length > 0) {
            props.setDatFile2(e.target.files[0])
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
            <div className="card-header text-center">FrontISTR file (Optional)</div>
            <div className="card-body">
                <div className="card-text">
                    <div className="form-group">
                        <label htmlFor="inputFEMFile">■ FrontISTR Mesh File</label>
                        <MyInput id="inputFEMFile" onChange={doFemFileChange} upload={false} />
                        <small><p className="text-right">[.msh/.inp] are allowed.</p></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputCntFile">■ FrontISTR Control File (.cnt)</label>
                        <MyInput id="inputCntFile" onChange={doCntFileChange} upload={false} />
                        <small><p className="text-right">[.cnt] are allowed.</p></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDatFile1">■ FrontISTR Control File (*-ctrl.dat)</label>
                        <MyInput id="inputDatFile1" onChange={doDatFile1Change} upload={false} />
                        <small><p className="text-right">[.dat] are allowed.</p> </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDatFile2">■ (Optional) FrontISTR Control File (*-part-ctrl.dat)</label>
                        <MyInput id="inputDatFile2" onChange={doDatFile2Change} upload={false} />
                        <small><p className="text-right">[.dat] are allowed.</p> </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputFEMThumbnail">■ FEM Sample Image</label>
                        <MyInput id="inputFEMThumbnail" onChange={doFemThumbnailChange} upload={true} />
                        <small><p className="text-right">[.png/.jpg/.jpeg] are allowed.</p></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputElementType">■ FEM Element Type</label>
                        <select className="form-control" id="inputElementType" onChange={doElementTypeChange}>
                            <option value="" />
                            <option value="segment">segment</option>
                            <option value="triangle">triangle</option>
                            <option value="quadrangle">quadrangle</option>
                            <option value="tetrahedron 1st order">tetrahedron 1st order</option>
                            <option value="tetrahedron 2nd order">tetrahedron 2nd order</option>
                            <option value="hexahedron">hexahedron</option>
                            <option value="pentahedron">pentahedron</option>
                            <option value="pyramid">pyramid</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputElementCount">■ The number of FEM Elements</label>
                        <input type="number" className="form-control" id="inputElementCount" placeholder="the number of FEM Element" onChange={doElementCountChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputNodeCount">■ The number of FEM Nodes</label>
                        <input type="number" className="form-control" id="inputNodeCount" placeholder="the number of FEM Node" onChange={doNodeCountChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
