import { TutorCard } from "../components";

const tutors = [{ id:1,imageUrl: "https://randomuser.me/api/portraits/women/79.jpg", tutorName: "Ricky Park", tutorLocation: "New York", skills: ["UI/UX", "Frontend Development", "Javascript", "React"] },
{ id:2,imageUrl: "https://randomuser.me/api/portraits/men/77.jpg", tutorName: "Ricky Park", tutorLocation: "New York", skills: ["UI/UX", "Frontend Development", "Javascript", "React"] },
{ id:3,imageUrl: "https://randomuser.me/api/portraits/women/67.jpg", tutorName: "Ricky Park", tutorLocation: "New York", skills: ["UI/UX", "Frontend Development", "Javascript", "React"] },
{ id:4,imageUrl: "https://randomuser.me/api/portraits/women/57.jpg", tutorName: "Ricky Park", tutorLocation: "New York", skills: ["UI/UX", "Frontend Development", "Javascript", "React"] },
{ id:4,imageUrl: "https://randomuser.me/api/portraits/men/57.jpg", tutorName: "Ricky Park", tutorLocation: "New York", skills: ["UI/UX", "Frontend Development", "Javascript", "React"] }];

const TutorList = () => {
    return (
        <div className="row d-flex justify-content-center">
            {
                tutors.map((tutor)=>{
                    return(
                        <TutorCard imageUrl={tutor.imageUrl} 
                        tutorName={tutor.tutorName} 
                        tutorLocation={tutor.tutorLocation} 
                        skills={tutor.skills} key={tutor.id}
                        className="col-md-4"/>
                    )
                })
            }
        </div>
    )
}

export default TutorList;