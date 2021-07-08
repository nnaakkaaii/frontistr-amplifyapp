import '../styles/Home.module.css'
import React from 'react'
import Amplify from 'aws-amplify'
import config from '../src/aws-exports'
import Layout from '../src/layout'
import CadPage from "../src/cad-page";
Amplify.configure(config)

function Home() {
  return (
      <div>
        <Layout title="FrontISTR Commons Data Reservoir" header="FrontISTR Commons Data Reservoir" footer="&copy; FrontISTR Commons.">
            <CadPage />
        </Layout>
      </div>
  )
}

export default Home
