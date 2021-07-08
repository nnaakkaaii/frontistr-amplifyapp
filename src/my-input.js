import '../styles/Home.module.css'
import styled from 'styled-components';
import React, { useState } from 'react'
import { Storage } from 'aws-amplify'


function MyInput(props) {
    const [inp, setInp] = useState('')
    const doChange = (e) => {
        props.onChange(e)
        if (e.target.files.length > 0) {
            const file = e.target.files[0]
            Storage.put(file.name, file).then(() => {setInp(file.name)})
        } else {
            setInp('')
        }
    }
    const NotUploaded = styled.p`
        .files:before {
            content: "select or drag";
        }
        .files:after {
            background-image: url(https://image.flaticon.com/icons/png/128/109/109612.png);
        }
    `
    const Uploaded = styled.p`
        .files:before {
            content: "${inp}";
        }
        .files:after {
            background-image: url(https://image.flaticon.com/icons/png/128/709/709510.png);
        }
    `
    return <div>
        {
            inp !== '' ?
                <Uploaded>
                    <div className="files">
                        <input type="file" className="form-control" id={props.id} onChange={doChange} />
                    </div>
                </Uploaded> :
                <NotUploaded>
                    <div className="files">
                        <input type="file" className="form-control" id={props.id} onChange={doChange} />
                    </div>
                </NotUploaded>
        }
    </div>
}

export default MyInput
