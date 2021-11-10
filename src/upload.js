import '../styles/Home.module.css'
import React, { useState } from 'react'
import {API, Storage} from 'aws-amplify';
import { createCad as createCadMutation } from './graphql/mutations';
import Card1 from './card-1'
import Card2 from './card-2'
import Card3 from './card-3'
import Card4 from './card-4'
import { doCheckCard1, doCheckCard2, doCheckCard3, doCheckCard4, doCheckCard234 } from "./utils"
import JSZip from "jszip";


const zip = (femFile, cntFile, datFile1, datFile2, setArchivedFile) => {
    if (!femFile || !cntFile || !datFile1) {
        return
    }
    let archived = new JSZip()
    archived.file(femFile.name, femFile)
    archived.file(cntFile.name, cntFile)
    archived.file(datFile1.name, datFile1)
    if (datFile2) {
        archived.file(datFile2.name, datFile2)
    }
    archived.generateAsync({type:"blob"}).then((content) => {
        return new File(
            [content],
            femFile.name.split('.')[0] + '.zip',
        { type: "application/octet-stream" }
        )
    }).then((content) => {
        Storage.put(content.name, content).then(() => {
            setArchivedFile(content)
        })
    })
}


function Upload(props) {
    const [name, setName] = useState('')
    const [thumbnailName, setThumbnailName] = useState('')
    const [thumbnailSize, setThumbnailSize] = useState(0)
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [contact, setContact] = useState('')
    const [cadFileName, setCadFileName] = useState('')
    const [cadFileSize, setCadFileSize] = useState(0)
    const [cadThumbnailName, setCadThumbnailName] = useState('')
    const [cadThumbnailSize, setCadThumbnailSize] = useState('')
    const [archivedFile, setArchivedFile] = useState()
    const [femFile, setFemFile] = useState()
    const [cntFile, setCntFile] = useState()
    const [datFile1, setDatFile1] = useState()
    const [datFile2, setDatFile2] = useState()
    const [femThumbnailName, setFemThumbnailName] = useState('')
    const [femThumbnailSize, setFemThumbnailSize] = useState('')
    const [elementType, setElementType] = useState('')
    const [elementCount, setElementCount] = useState(0)
    const [nodeCount, setNodeCount] = useState(0)
    const [matrixFileName, setMatrixFileName] = useState('')
    const [matrixFileSize, setMatrixFileSize] = useState(0)
    const [matrixThumbnailName, setMatrixThumbnailName] = useState('')
    const [matrixThumbnailSize, setMatrixThumbnailSize] = useState('')

    const doSubmit = () => {
        const card1IsOk = doCheckCard1(name, thumbnailName, thumbnailSize, description, author, contact)
        const card2IsOk = doCheckCard2(cadFileName, cadFileSize, cadThumbnailName, cadThumbnailSize)
        const card3IsOk = doCheckCard3(femFile, cntFile, datFile1, datFile2, femThumbnailName, femThumbnailSize, elementType, elementCount, nodeCount)
        const card4IsOk = doCheckCard4(matrixFileName, matrixFileSize, matrixThumbnailName, matrixThumbnailSize)
        const card234IsOk = doCheckCard234(cadFileName, femFile, matrixFileName)
        if (!card1IsOk) {
            setName(''); setThumbnailName(''); setDescription(''); setAuthor(''); setContact('');
            return
        }
        if (!card2IsOk) {
            setCadFileName(''); setCadFileSize(0); setCadThumbnailName(''); setCadThumbnailSize(0);
            return
        }
        if (!card3IsOk) {
            setFemFile(''); setCntFile(''); setDatFile1(''); setDatFile2('');
            setFemThumbnailName(''); setFemThumbnailSize(0); setElementType(''); setElementCount(0); setNodeCount(0);
            return
        }
        if (!card4IsOk) {
            setMatrixFileName(''); setMatrixFileSize(0); setMatrixThumbnailName(''); setMatrixThumbnailSize(0);
            return
        }
        if (!card234IsOk) {
            return
        }
        zip(femFile, cntFile, datFile1, datFile2, setArchivedFile)
        const formData = {
            name: name,
            thumbnail: thumbnailName,
            cad_file: cadFileName !== '' ? cadFileName : null,
            cad_size: cadFileSize > 0 ? cadFileSize : null,
            cad_thumbnail: cadThumbnailName !== '' ? cadThumbnailName : null,
            fem_file: archivedFile !== '' ? archivedFile.name : null,
            fem_size: archivedFile !== '' ? archivedFile.size : null,
            fem_thumbnail: femThumbnailName !== '' ? femThumbnailName : null,
            element_type: elementType !== '' ? elementType : null,
            num_elements: elementCount > 0 ? elementCount : null,
            num_nodes: nodeCount > 0 ? nodeCount : null,
            matrix_file: matrixFileName !== '' ? matrixFileName : null,
            matrix_size: matrixFileSize > 0 ? matrixFileSize : null,
            matrix_thumbnail: matrixThumbnailName !== '' ? matrixThumbnailName : null,
            description: description,
            author: author !== '' ? author : null,
            contact: contact !== '' ? contact : null,
        }
        API.graphql({ query: createCadMutation, variables: { input: formData } }).then(res => {
            setName('');
            setThumbnailName('');
            setDescription('');
            setAuthor('');
            setContact('');
            setCadFileName('');
            setCadFileSize(0);
            setCadThumbnailName('');
            setCadThumbnailSize(0);
            setArchivedFile('');
            setFemThumbnailName('');
            setFemThumbnailSize(0);
            setElementType('');
            setElementCount(0);
            setNodeCount(0);
            setMatrixFileName('');
            setMatrixFileSize(0);
            setMatrixThumbnailName('');
            setMatrixThumbnailSize(0);
        })
    }
    return (
        <div className="alert alert-secondary">
            <h4 className="py-4">Upload New CAD/FEM/Matrix Data.</h4>
            <form onSubmit={doSubmit}>
                <div className="card-group">
                    <Card1 setName={setName} setThumbnailName={setThumbnailName} setThumbnailSize={setThumbnailSize} setDescription={setDescription} setAuthor={setAuthor} setContact={setContact} />
                    <Card2 setCadFileName={setCadFileName} setCadFileSize={setCadFileSize} setCadThumbnailName={setCadThumbnailName} setCadThumbnailSize={setCadThumbnailSize} />
                    <Card3 setFemFile={setFemFile} setCntFile={setCntFile} setDatFile1={setDatFile1} setDatFile2={setDatFile2}
                           setFemThumbnailName={setFemThumbnailName} setFemThumbnailSize={setFemThumbnailSize} setElementType={setElementType} setElementCount={setElementCount} setNodeCount={setNodeCount}/>
                    <Card4 setMatrixFileName={setMatrixFileName} setMatrixFileSize={setMatrixFileSize} setMatrixThumbnailName={setMatrixThumbnailName} setMatrixThumbnailSize={setMatrixThumbnailSize} />
                </div>
                <div className="row justify-content-center my-3">
                    <button className="btn btn-primary">Upload</button>
                </div>
            </form>
        </div>
    )
}


export default Upload
