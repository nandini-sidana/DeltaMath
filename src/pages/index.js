import React from "react"
import Layout from '../components/Layout';
import SectionHeader1 from '../components/home/SectionHeader1';
import SectionHome2 from '../components/home/SectionHome2';
import SectionHome3 from '../components/home/SectionHome3';
import SectionHeader4 from '../components/home/SectionHeader4';
import Carousel from '../components/home/Carousel';
import ProblemsSolved from '../components/home/ProblemsSolved';

export default function Home() {
  return (
    <Layout>
      <SectionHeader1/>
      <SectionHome2/>
      <SectionHome3/>
      <SectionHeader4/>
      <Carousel/>
      <ProblemsSolved/>
    </Layout>
  )
}
