import '../assets/styles/tutor-card.css';
import { storage, ref, getDownloadURL } from '../firebase';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppContext } from '../context/appContext';

const TutorCard = ({ imageUrl, tutorName, tutorLocation, skills, id }) => {
    console.log(imageUrl);
    const [image, setImage] = useState('');

    useEffect(() => {
        console.log("inside use effect");
        console.log(imageUrl);
        let isMounted = true;
        getDownloadURL(ref(storage, `images/${imageUrl}`))
            .then((url) => {
                console.log(url); 
                if (isMounted) {
                    setImage(url);
                }
            });
        return () => { isMounted = false };
    }, [])

    return (
        <div className="tutor-container">
            <Link to={`/tutor-detail/${id}`} style={{ textDecoration: "none" }}>
                <img src={image} alt='tutor-image' className='round' />
                <h3 style={{ color: "#000" }}>{tutorName}</h3>
            </Link>
            <h6>{tutorLocation}</h6>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {
                        skills.map((skill) => {
                            return (
                                <li key={skill}>{skill}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default TutorCard;