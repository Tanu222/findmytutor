import { TutorCard,Loading } from "../components";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";


const TutorList = () => {
    let {isLoading, getTutors,tutors} = useAppContext();

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
            <div className="d-flex justify-content-center">
             <TextField id="outlined-search" label="search" type="search" sx={{ m: 1, width: '40ch'}} />
            </div>
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