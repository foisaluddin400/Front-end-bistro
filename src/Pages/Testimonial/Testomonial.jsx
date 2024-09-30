import { Rating } from "@mui/material";
import { SiVoipdotms } from "react-icons/si";
import SectionHead from "../Shared/SectionHeading/SectionHead";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Testomonial = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://bistro-bosss.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <div>
                <SectionHead sectionPar='---What Our Clients Say---' sectionhead='TESTIMONIALS'></SectionHead>
            </div>

            <div className="md:px-[170px]">
            <Carousel>
            {
                    review.map((reviews) =>
                        <div>
                            
                            <Rating size="large" name="read-only" value={reviews.rating} 
                            readOnly />
                            <h2 className="flex justify-center py-4 text-5xl "><SiVoipdotms /></h2>
                            <div className="flex">
                                <h1 className="mt-3"><IoIosArrowBack className="text-blue-500 text-2xl" /></h1>
                                <p className="pb-3 md:px-[40px]">{reviews.details}</p>
                                <h1 className="mt-3"><IoIosArrowForward className="text-blue-500 text-2xl"/></h1>
                            </div>
                            <h1 className="pb-11 text-yellow-500 font-semibold text-2xl">{reviews.name}</h1>
                        </div>
                    )
                }
            </Carousel>
                
            </div>




        </div>
    );
};

export default Testomonial;