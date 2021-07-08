import React from 'react'


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

    const cardHeight = 280;
    const cardWidth = 200;
    const imgHeight = 132;
    const imgWidth = 198;
    const imgWidthDownload = props.mode === 'download' ? 188 : 198;

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

    return (
        <tr>
            <th style={th}>
                <div className="card" style={{height: cardHeight, width: cardWidth}}>
                    <img src={props.value.thumbnail_src} height={imgHeight} width={imgWidth} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.value.name}</h5>
                    </div>
                </div>
            </th>
            <td style={td}>
                {
                    props.value.cad_file &&
                        <div className={props.mode === 'download' ? "card blink" : "card"} style={{height: cardHeight, width: cardWidth}} onClick={doClickCad}>
                            <img src={props.value.cad_thumbnail_src} height={imgHeight} width={imgWidthDownload}/>
                            <div className="card-body">
                                <small><p className="text-right">File Type : {props.value.cad_file.split('.')[1]}</p></small>
                                <small><p className="text-right">File Size : {props.value.cad_size}</p></small>
                            </div>
                        </div>
                }
            </td>
            <td style={td}>
                {
                    props.value.fem_file &&
                        <div className={props.mode === 'download' ? "card blink" : "card"} style={{height: cardHeight, width: cardWidth}} onClick={doClickFem}>
                            <img src={props.value.fem_thumbnail_src} height={imgHeight} width={imgWidthDownload} />
                            <div className="card-body">
                                <small><p className="text-right">File Type : {props.value.fem_file.split('.')[1]}</p></small>
                                <small><p className="text-right">File Size : {props.value.fem_size}</p></small>
                                {
                                    props.value.element_type &&
                                        <small><p className="text-right">Element Type : {props.value.element_type}</p></small>
                                }
                                {
                                    props.value.num_elements &&
                                        <small><p className="text-right">Element Count : {props.value.num_elements}</p> </small>
                                }
                                {
                                    props.value.num_nodes &&
                                        <small><p className="text-right">Node Count : {props.value.num_nodes}</p></small>
                                }
                            </div>
                        </div>
                }
            </td>
            <td style={td}>
                {
                    props.value.matrix_file &&
                        <div className={props.mode === 'download' ? "card blink" : "card"} style={{height: cardHeight, width: cardWidth}} onClick={doClickMatrix}>
                            <img src={props.value.matrix_thumbnail_src} height={imgHeight} width={imgWidthDownload} />
                            <div className="card-body">
                                <small><p className="text-right">File Type : {props.value.matrix_file.split('.')[1]}</p></small>
                                <small><p className="text-right">File Size : {props.value.matrix_size}</p></small>
                            </div>
                        </div>
                }
            </td>
            <td style={td}>
                <div className="card" style={{height: cardHeight, width: cardWidth}}>
                    <div className="card-body">
                        <p className="card-text">{props.value.description}</p>
                        {
                            props.value.author &&
                                <small><p className="text-right">Author : {props.value.author}</p></small>
                        }
                        {
                            props.value.contact &&
                                <small><p className="text-right">Contact : {props.value.contact}</p></small>
                        }
                        <small style={{position: 'relative', top: 200}}><p className="text-right">Created : {f}</p></small>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default Item
