import React from 'react'
import Layout from '../components/Layout';
import TeacherSection from '../components/teachers/TeacherSection';
import TeacherSection2 from '../components/teachers/TeacherSection2';
import Carousel from '../components/teachers/Carousel';
import Offers from '../components/teachers/Offers'
import TeacherSection5 from '../components/teachers/TeacherSection5';

export default function teachersSchools() {
    return (
        <Layout>
            <TeacherSection/>
            <TeacherSection2/>
            <Carousel/>
            <Offers/>
            <TeacherSection5/>
        </Layout>
    )
}
