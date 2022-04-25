import React from "react";
import coding from '../assets/images/coding.jpg';

import '../assets/styles/home.css';
import CourseCard from "../components/CourseCard";
import { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';

const Cdata = [{
    id: 1,
    title: "Competitive Coding",
    ctext: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    img:coding
},
{
    id: 2,
    title: "Dancing",
    ctext: "Some quick example text to build on the card title and make up the bulk of the card's content."
},
{
    id: 3,
    title: "Singing",
    ctext: "Some quick example text to build on the card title and make up the bulk of the card's content."
}];

const HomePage = () => {

    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                color : 0x4fc3f7
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className="main">
            <div className='homepage'>
                <div ref={myRef} style={{ height: "500px" }}>

                </div>
                <p style={{ color: "white", fontSize: "5.5rem", position: "absolute", top: "200px", left: "50px" }}>Welcome to </p>
                <p style={{ color: "white", fontSize: "5.5rem", position: "absolute", top: "300px", left: "50px" }}>Skill Up</p>
            </div>

            {/* WHEN MAP WILL BE USED */}
            <div className="" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div className="row">
                    {
                        Cdata.map((value) => {
                            return (
                                <CourseCard
                                    key={value.id} //here key is not considered as props
                                    imgsrc={value.imgsrc}
                                    title={value.title}
                                    ctext={value.ctext}
                                    //img={value.img}
                                    id={value.id}
                                />
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )

}

export default HomePage;