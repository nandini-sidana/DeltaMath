import React from 'react'
import Layout from '../components/Layout'
import AboutSection1 from '../components/about/AboutSection1'
import AboutSection2 from '../components/about/AboutSection2'
import AboutSection3 from '../components/about/AboutSection3'
import AboutSection4 from '../components/about/AboutSection4'

export default function about() {
    return (
        <Layout>
            <AboutSection1/>
            <AboutSection2/>
            <AboutSection3/>
            <AboutSection4/>
        </Layout>
    )
}
