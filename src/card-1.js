import '../styles/Home.module.css'
import React from 'react'
import MyInput from "./my-input";


export default function Card1(props) {
    const doNameChange = (e) => {
        if (e.target.value) {
            props.setName(e.target.value)
        }
    }
    const doThumbnailChange = (e) => {
        if (e.target.files.length > 0) {
            props.setThumbnailName(e.target.files[0].name)
            props.setThumbnailSize(e.target.files[0].size)
        }
    }
    const doDescriptionChange = (e) => {
        if (e.target.value) {
            props.setDescription(e.target.value)
        }
    }
    const doAuthorChange = (e) => {
        if (e.target.value) {
            props.setAuthor(e.target.value)
        }
    }
    const doContactChange = (e) => {
        if (e.target.value) {
            props.setContact(e.target.value)
        }
    }
    return (
        <div className="card my-2">
            <div className="card-header text-center">meta data (Required)</div>
            <div className="card-body">
                <div className="card-text">
                    <div className="form-group">
                        <label>■ name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="data name" required onChange={doNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputThumbnail">■ thumbnail</label>
                        <MyInput id="inputThumbnail" onChange={doThumbnailChange} />
                        <small><p className="text-right">[.png/.jpg/.jpeg] are allowed.</p></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDescription">■ description</label>
                        <textarea className="form-control" rows={5} id="inputDescription" placeholder="description" required onChange={doDescriptionChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAuthor">■ author</label>
                        <input type="name" className="form-control" id="inputAuthor" placeholder="your name" onChange={doAuthorChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputContact">■ contact (email)</label>
                        <input type="mail" className="form-control" id="inputContact" placeholder="your email address" onChange={doContactChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
