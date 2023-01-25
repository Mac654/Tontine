import React from 'react';

interface Props {
    topText: string,
    sectionBody: string,
    img: string
}

const SectionINFO: React.FC<Props> = ({topText,sectionBody,img}) => {
    return (
        <div className='section-info'>
            <div className='section-info-left'>
                <h1 className='section-info-left-h1'>{topText}</h1>
                <p className='section-info-left-p'>{sectionBody}</p>
            </div>
            <div className='section-info-right'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default SectionINFO;