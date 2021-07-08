import '../styles/Home.module.css'
import React, { useState , useEffect } from 'react'
import { API, Storage } from 'aws-amplify'
import { listCads } from "./graphql/queries"
import Menu from './menu'
import Search from './search'
import Upload from "./upload"
import Download from "./download"
import Cad from './cad'


function CadPage(props) {
    const [mode, setMode] = useState('default')
    const [cads, setCads] = useState([])

    useEffect(() => {fetchNotes()}, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listCads });
        const cadsFromAPI = apiData.data.listCads.items;
        await Promise.all(cadsFromAPI.map(async cad => {
            if (cad.thumbnail) {cad.thumbnail_src = await Storage.get(cad.thumbnail)}
            if (cad.cad_file) {cad.cad_file_src = await Storage.get(cad.cad_file)}
            if (cad.cad_thumbnail) {cad.cad_thumbnail_src = await Storage.get(cad.cad_thumbnail)}
            if (cad.fem_file) {cad.fem_file_src = await Storage.get(cad.fem_file)}
            if (cad.fem_thumbnail) {cad.fem_thumbnail_src = await Storage.get(cad.fem_thumbnail)}
            if (cad.matrix_file) {cad.matrix_file_src = await Storage.get(cad.matrix_file)}
            if (cad.matrix_thumbnail) {cad.matrix_thumbnail_src = await Storage.get(cad.matrix_thumbnail)}
            return cad;
        }))
        setCads(apiData.data.listCads.items);
    }

    const doSearchClick = (e) => {
        if (mode !== 'search') {
            setMode('search')
        } else {
            setMode('default')
        }
    }
    const doUploadClick = (e) => {
        if (mode !== 'upload') {
            setMode('upload')
        } else {
            setMode('default')
        }
    }
    const doDownloadClick = (e) => {
        if (mode !== 'download') {
            setMode('download')
        } else {
            setMode('default')
        }
    }

    return (
        <div>
            <Menu mode={mode} onSearchClick={doSearchClick} onUploadClick={doUploadClick} onDownloadClick={doDownloadClick} />
            <div>
                {mode === 'search' && <Search cads={cads} setCads={setCads} />}
                {mode === 'upload' && <Upload cads={cads} setCads={setCads} />}
                {mode === 'download' && <Download cads={cads}/>}
            </div>
            <Cad mode={mode} cads={cads}/>
        </div>
    )
}


export default CadPage
