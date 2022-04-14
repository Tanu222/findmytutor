import { TutorCard,Loading } from "../components";

import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

const TutorList = () => {
    const {isLoading, getTutors,tutors} = useAppContext();
   // console.log(tutors);
    useEffect(()=>{
        getTutors();
    },[])
    if(isLoading){
        return(
            <Loading />
        )
    }
    if(tutors.length===0){
        return(
            <h3 className="d-flex justify-content-center">No Jobs to Display...</h3>
        )
    }
    return (
        
        <div className="row d-flex justify-content-center">
            {
                tutors.map((tutor) => {
                    return (
                        <TutorCard imageUrl={tutor.imageUrl}
                            tutorName={tutor.name}
                            tutorLocation={tutor.location}
                            skills={tutor.skills} key={tutor.id} id={tutor.id}
                            className="col-md-4" />
                    )
                })
            }
        </div>
    )
}

export default TutorList;