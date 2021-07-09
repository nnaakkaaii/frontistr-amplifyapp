import React from 'react'
import {cadDataType, femDataType, matrixDataType} from "./data-types";


function Item(props) {
    const th = {
        width: "100px",
    }
    const td = {
        textAlign: "center",
        width: "150px",
    }
    let d = new Date(Date.parse(props.value.createdAt))
    let f = d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()

    const hasElementType = props.value.element_type ? 1 : 0
    const hasNumElements = props.value.num_elements ? 1 : 0
    const hasNumNodes = props.value.num_nodes ? 1 : 0
    const cardHeight = 240 + (hasElementType + hasNumElements + hasNumNodes) * 40;

    const cardWidth = 180;
    const imgHeight = 132;
    const imgWidth = 178;
    const imgWidthDownload = props.mode === 'download' ? 168 : 178;

    const downloadFromURL = (url) => {
        const a = document.createElement("a")
        document.body.appendChild(a)
        a.href = url
        a.click()
        a.remove()
    }
    const doClickCad = (e) => {downloadFromURL(props.value.cad_file_src)}
    const doClickFem = (e) => {downloadFromURL(props.value.fem_file_src)}
    const doClickMatrix = (e) => {downloadFromURL(props.value.matrix_file_src)}

    const SmallText = (props) => (
        <div>
            <small><p className="text-left mb-0 pb-0">{props.header}</p></small>
            <small><p className="text-right mt-0 pt-0">{props.body}</p></small>
        </div>
    )

    return (
        <tr>
            <th style={th}>
                <div className="d-flex justify-content-center my-5">
                    {props.id}
                </div>
            </th>
            <td style={th}>
                <div className="card" style={{height: cardHeight, width: cardWidth}}>
                    <img src={props.value.thumbnail_src} height={imgHeight} width={imgWidth} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.value.name}</h5>
                    </div>
                </div>
            </td>
            <td style={td}>
                {
                    props.value.cad_file ?
                        <div className={props.mode === 'download' ? "card blink" : "card"} style={{height: cardHeight, width: cardWidth}} onClick={doClickCad}>
                            <img src={props.value.cad_thumbnail_src} height={imgHeight} width={imgWidthDownload}/>
                            <div className="card-body">
                                <SmallText header="Data Type" body={cadDataType[props.value.cad_file.split('.')[1]]} />
                                <SmallText header="File Size" body={props.value.cad_size.toLocaleString() + " B"} />
                            </div>
                        </div> :
                        <div className="card" style={{height: cardHeight, width: cardWidth}}>
                            <div className="mx-auto my-auto">
                                <h1>N.A.</h1>
                            </div>
                        </div>
                }
            </td>
            <td style={td}>
                {
                    props.value.fem_file ?
                        <div className={props.mode === 'download' ? "card blink" : "card"} style={{height: cardHeight, width: cardWidth}} onClick={doClickFem}>
                            <img src={props.value.fem_thumbnail_src} height={imgHeight} width={imgWidthDownload} />
                            <div className="card-body">
                                <SmallText header="Data Type" body={femDataType[props.value.fem_file.split('.')[1]]} />
                                <SmallText header="File Size" body={props.value.fem_size.toLocaleString() + " B"} />
                                {
                                    props.value.element_type &&
                                        <SmallText header="Element Type" body={props.value.element_type} />
                                }
                                {
                                    props.value.num_elements &&
                                        <SmallText header="Number of Elements" body={props.value.num_elements.toLocaleString()} />
                                }
                                {
                                    props.value.num_nodes &&
                                        <SmallText header="Number of Nodes" body={props.value.num_nodes.toLocaleString()} />
                                }
                            </div>
                        </div> :
                        <div className="card" style={{height: cardHeight, width: cardWidth}}>
                            <div className="mx-auto my-auto">
                                <h1>N.A.</h1>
                            </div>
                        </div>
                }
            </td>
            <td style={td}>
                {
                    props.value.matrix_file ?
                        <div className={props.mode === 'download' ? "card blink" : "card"} style={{height: cardHeight, width: cardWidth}} onClick={doClickMatrix}>
                            <img src={props.value.matrix_thumbnail_src} height={imgHeight} width={imgWidthDownload} />
                            <div className="card-body">
                                <SmallText header="Storage Format" body={matrixDataType[props.value.matrix_file.split('.')[1]]} />
                                <SmallText header="File Size" body={props.value.matrix_size} />
                            </div>
                        </div> :
                        <div className="card" style={{height: cardHeight, width: cardWidth}}>
                            <div className="mx-auto my-auto">
                                <h1>N.A.</h1>
                            </div>
                        </div>
                }
            </td>
            <td style={td}>
                <div className="card" style={{height: cardHeight, width: cardWidth}}>
                    <div className="card-body">
                        <p className="card-text mb-5">{props.value.description}</p>
                        {
                            props.value.author &&
                                <SmallText header="Author" body={props.value.author} />
                        }
                        {
                            props.value.contact &&
                                <SmallText header="Contact" body={props.value.contact} />
                        }
                        <small><p className="text-left">Created</p></small>
                        <small><p className="text-right">{f}</p></small>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default Item
