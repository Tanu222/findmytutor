import React from "react";
import img from '../assets/images/home2.png';
import '../assets/styles/home.css';
import CourseCard from "../components/CourseCard";

const Cdata = [{
    id: 1,
    title: "Competitive Coding",
    ctext: "Some quick example text to build on the card title and make up the bulk of the card's content."
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
    return (
        <div className="container main">
            <div className="row introSection">
                <div className="col-6 welcome">
                    <h2>Welcome to one to one discussion!!</h2>
                    {/* <br></br> */}
                    <p>here's a solution to all the problems</p>
                </div>
                <div className="col-6 img">
                    <img className="homeimg img-fluid" src={img} alt="not found" />
                </div>
            </div>
            

                {/* WHEN MAP WILL BE USED */}
                <div className="container">
                <div className="row">
                    {
                        Cdata.map((value) => {
                            return (
                                <CourseCard
                                    key={value.id} //here key is not considered as props
                                    imgsrc={value.imgsrc}
                                    title={value.title}
                                    ctext={value.ctext}
                                />
                            )
                        }
                        )
                    }
                </div>
            </div>

            {/* <div className="container">
                <div className="row">
                    {
                        feautures.map((value, index) => {
                            console.log(index);
                            return (
                                <CourseCard
                                    key={value.id} //here key is not considered as props
                                    imgsrc={value.imgsrc}
                                    title={value.title}
                                    ctext={value.ctext}
                                />
                            )
                        }
                        )
                    }
                </div>
            </div> */}
        </div>
    )

}

export default HomePage;