import '../assets/styles/tutor-card.css';

const TutorCard = ({ imageUrl, tutorName, tutorLocation, skills }) => {
    return (
        <>
            <div className="tutor-container">
                <img className="round" src={imageUrl} alt="user" />
                <h3>{tutorName}</h3>
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
        </>
    )
}

export default TutorCard;