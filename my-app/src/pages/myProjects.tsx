import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import SectionINFO from '@/components/SectionINFO';
import SectionCTA from '@/components/SectionCTA';

interface Props {
    sectionInfo:{
      TopText:string,
      body:[{
        children:[{
          text:string
        }]
      }],
      mainImage:string
    },
    sectionName:{
      TopText:string,
      body:[{
        children:[{
          text:string
        }]
      }],
      BottomText:string
    }
  }

const myProjects: React.FC<Props> = ({sectionInfo,sectionName}) => {
  //I am sure doing with "any" is going to lose all typescript advantage,however its my first time working with Sanity,so i am really doing my best to figure it out!
    const [imageUrl,setImageUrl] = useState<any>('')

    useEffect(() => {
        const imgBuilder = imageUrlBuilder({
            projectId: '082dgzyp',
            dataset: 'production'
        })
        setImageUrl(imgBuilder.image(sectionInfo.mainImage))
    }, [sectionInfo.mainImage])

    return (
     <>
        <Head>
            <title>Tontine - My Projects</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        <SectionINFO topText={sectionInfo.TopText} sectionBody={sectionInfo.body[0].children[0].text} img={imageUrl}/>
        <SectionCTA topText={sectionName.TopText} sectionBody={sectionName.body[0].children[0].text} bottomText={sectionName.BottomText}/>
        </main>
     </>
    );
};

export const getServerSideProps: GetServerSideProps = async (query) => {

    const data = await fetch('https://082dgzyp.api.sanity.io/v1/data/query/production?query=*[_type=="LandingPage"]')
    .then(res => res.json())
    .then(data => data.result)
  
    const sectionInfo = data[0].SectionInfo
    const sectionName = data[0].Sectionname

    if(!sectionInfo || !sectionName){
      return {
        notFound:true
      }
    }

    return {
      props: {
        sectionInfo,
        sectionName,
      }
    }
  }

export default myProjects;