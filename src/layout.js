import '../styles/Home.module.css'
import React from 'react'
import Header from './header'
import Introduction from "./introduction";
import Footer from './footer'
import Style from './style'


function Layout(props) {
    return (
        <div>
            <Style />
            <Header title={props.title} header={props.header} />
            <Introduction />
            <div className="container">
                {props.children}
            </div>
            <Footer footer={props.footer}/>
        </div>
    )
}


export default Layout
