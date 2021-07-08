import '../styles/Home.module.css'
import React from 'react'


function Footer(props) {
    return (
        <footer className="py-4 bg-dark">
            <div className="container text-center">
                <div className="text-muted">{props.footer}</div>
                <div className="text-muted">Contact : <a href="mailto:support@frontistr.org">support@frontistr.org</a></div>
            </div>
        </footer>
    )
}


export default Footer
