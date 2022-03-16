import { FaFacebook, FaGoogle, FaYoutube, FaDribbble, FaLinkedin } from 'react-icons/fa';
import '../assets/styles/tutor-detail.css';

const TutorDetails = ({ tutor }) => {
    return (
        <div className="container mt-5 mb-5 tutor-detail">
            <div className="row no-gutters">
                <div className="col-md-2 col-lg-2 text-center"><img src={tutor.imageUrl} /></div>
                <div className="col-md-8 col-lg-8">
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between align-items-center p-3">
                            <h3 className="display-5">{tutor.name}</h3>
                            <div className='social-links' style={{ fontSize: "25px", color: "#0093c4" }}>
                                <FaFacebook className='m-3' />
                                <FaGoogle className='m-3' />
                                <FaYoutube className='m-3' />
                                <FaDribbble className='m-3' />
                                <FaLinkedin className='m-3' />
                            </div>
                        </div>
                        <div className="p-3 bg-black text-white">
                            <h6>{
                                tutor.skills.map((skill)=>{
                                    return(
                                        <span key={skill}> | {skill}</span> 
                                    )
                                })
                            }</h6>
                        </div>
                        <p className='mt-3'>{tutor.description}</p>
                    </div>
                    <div className='btn' style={{ color: "#fff", backgroundColor: "#4fc3f7" }}>Book a Meet</div>
                </div>
            </div>
        </div>
    )
}

export default TutorDetails;