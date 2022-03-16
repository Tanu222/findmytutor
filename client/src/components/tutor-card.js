import '../assets/styles/tutor-card.css';

import { Link } from 'react-router-dom';

const TutorCard = ({ imageUrl, tutorName, tutorLocation, skills,id }) => {
    return (
            <div className="tutor-container">
                <Link to={`/tutor-detail/${id}`} style={{textDecoration:"none"}}>
                <img className="round" src={imageUrl} alt="user" />
                <h3 style={{color:"#000"}}>{tutorName}</h3>
                </Link>
                <h6>{tutorLocation}</h6>
                <div className="skills">
                <h6>Skills</h6>
                <ul>
                   {
                       skills.map((skill)=>{
                           return(
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