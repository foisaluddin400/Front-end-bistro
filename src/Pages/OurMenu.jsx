import React from 'react';
import SectionHead from './Shared/SectionHeading/SectionHead';
import Fetur from '../assets/home/featured.jpg'
const OurMenu = () => {
    return (
        <div>
            <div className="feback my-[100px]">
                <div className="feture ">
                    <div>
                        <SectionHead sectionPar='---Check it out---' sectionhead='FROM OUR MENU'></SectionHead>
                    </div>
                    <div className='md:flex '>
                        <div className='flex justify-center'>
                            <img className='w-[200px] md:w-[900px]' src={Fetur} alt="img" />
                        </div>
                        <div className='lg:pt-11 pb-[50px]'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;