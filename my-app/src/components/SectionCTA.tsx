import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
    topText:string,
    sectionBody:string,
    bottomText:string
}

const SectionCTA: React.FC<Props> = ({topText,sectionBody,bottomText}) => {
  const params = useRouter()
  console.log(params.pathname)
    return (
        <div className='section-cta'>
        <h1 className='section-cta-h1'>{topText}</h1>
        <p className='section-cta-p'>{sectionBody}</p>
        <Link href={params.pathname === "/" ? "/myProjects" : '/'} className='section-ctaLink'>
        {params.pathname === "/" ? "To My Projects" : 'Back to home'}
        </Link>
        <span className='section-cta-span'>{bottomText}</span>
      </div>
    );
};

export default SectionCTA;