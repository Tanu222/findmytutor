import { TutorCard } from "../components";
import db from '../firebase';
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const TutorList = () => {
    const [tutors, setTutors] = useState([]);

    useEffect(()=>
         onSnapshot(collection(db,"tutors"),(snapshot)=>{
            setTutors(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})));
        })
    ,[])
    
    return (
        <div className="row d-flex justify-content-center">
            {
                tutors.map((tutor)=>{
                    return(
                        <TutorCard imageUrl={tutor.imageUrl} 
                        tutorName={tutor.name} 
                        tutorLocation={tutor.location} 
                        skills={tutor.skills} key={tutor.id}
                        className="col-md-4"/>
                    )
                })
            }
        </div>
    )
}

export default TutorList;