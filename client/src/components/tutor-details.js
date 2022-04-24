import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { storage, ref, getDownloadURL } from '../firebase';
import '../assets/styles/tutor-detail.css';  

const TutorDetails = ({ tutor }) => {
    let imageUrl = tutor.imageUrl;
    const [image, setImage] = useState('');

    useEffect(() => {
        if(imageUrl!=='https://randomuser.me/api/portraits/women/32.jpg'){
        let isMounted = true;
        getDownloadURL(ref(storage, `images/${imageUrl}`))
            .then((url) => {
              //  console.log(url); 
                if (isMounted) {
                    setImage(url); 
                }
            });
            return () => { isMounted = false }; 
        }else{
           setImage(imageUrl);
        }
    }, [])
    return (
        <div className="container mt-5 mb-5 tutor-detail">
            <div className="row no-gutters">
                <div className="col-md-2 col-lg-2 text-center"><img src={image} alt='tutor-image'/></div>
                <div className="col-md-8 col-lg-8">
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between align-items-center p-3">
                            <h3 className="display-5">{tutor.name}</h3>
                            <div className='social-links' style={{ fontSize: "25px", color: "#0093c4" }}>
                                <a href={`mailto:${tutor.email}`}>
                                    <FaEnvelope className='m-3' />
                                </a>
                                <a href={tutor.linkedin} target="_blank" rel="noreferrer noopener">
                                    <FaLinkedin className='m-3' />
                                </a>
                                <a href={tutor.github} target="_blank" rel="noreferrer noopener">
                                    <FaGithub className='m-3' />
                                </a>
                            </div>
                        </div>
                        <div className="p-3 bg-black text-white">
                            <h6>{
                                tutor.skills.map((skill) => {
                                    return (
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