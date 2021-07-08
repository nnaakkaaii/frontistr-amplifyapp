import '../styles/Home.module.css'
import React from 'react'


function Style(props) {
    return (
        <style jsx="true">{`
            h1 {
                text-align: right;
                padding: 5px 15px;
            }
            h4 {
                text-align: center;
                margin: 0px 5px;
                fontSize: 24pt;
                fontWeight: bold;
            }
            p {
                text-align: left;
                margin: 0px 5px;
                color: #669;
                fontSize: 18pt;
            }
            @media screen and (max-width: 767px) {
              #wrapper {
                width: 100%;
                overflow: hidden;
              }
            }
            .blink {
              animation: blinkAnimation 1s ease infinite alternate;
            }
            @keyframes blinkAnimation {
              0% {
                border: 6px solid #D7EEFF;
              }
              100% {
                border: 6px solid #00ECFF;
              }
            }

            .files input {
              opacity: 0;
              padding: 100px 0px 85px 0px;
              margin: 0;
              width: 100% !important;
            }

            .files{
              outline: 2px dashed #92b0b3;
              outline-offset: -10px;
              position:relative
            }

            .files:after {
              pointer-events: none;
              position: absolute;
              top: 60px;
              left: 0;
              width: 50px;
              right: 0;
              height: 56px;
              content: "";
              display: block;
              margin: 0 auto;
              background-size: 100%;
              background-repeat: no-repeat;
            }

            .files:before {
              position: absolute;
              bottom: 10px;
              left: 0;  pointer-events: none;
              width: 100%;
              right: 0;
              height: 57px;
              display: block;
              margin: 0 auto;
              color: #2ea591;
              font-weight: 600;
              text-transform: capitalize;
              text-align: center;
            }
        `}</style>
    )
}


export default Style
