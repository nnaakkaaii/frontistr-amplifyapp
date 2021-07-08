import '../styles/Home.module.css'
import React from 'react'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import Head from 'next/head'


function Header(props) {
    const header = {
        fontFamily: 'Times New Roman',
    }
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
                <meta name="description" content={props.description} />
                <title>{props.title}</title>
                <link rel="shorcut icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossOrigin="anonymous" />
            </Head>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <div className="d-none d-md-block">
                        <a className="navbar-brand">
                            <h3 style={header}>{props.header}</h3>
                        </a>
                    </div>
                    <div className="d-none d-md-block">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link">Version 1.0.0</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <AmplifySignOut />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default withAuthenticator(Header)
