import { TutorCard, Loading } from "../components";
import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Paper,InputBase,IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "../assets/styles/tutor-list.css";
import { border } from "@mui/system";

const TutorList = () => {
    let { isLoading, getTutors, tutors } = useAppContext();

    useEffect(() => {
        getTutors();
    }, [])

    if (isLoading) {
        return (
            <Loading />
        )
    }
    if (tutors.length === 0) {
        return (
            <h3 className="d-flex justify-content-center">No Jobs to Display...</h3>
        )
    }
    return (

        <div className="row d-flex justify-content-center">
            <div className="d-flex justify-content-center">
                {/* <TextField id="outlined-search" label="search" type="search" sx={{ m: 1, width: '40ch'}} /> */}
                <Paper
                    component="form"
                    sx={{ p: '6px 4px', display: 'flex', alignItems: 'center', width: 400 , marginTop:'20px', border:'1px solid rgba(0,0,0,0.3)' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1}}
                        placeholder="Search tutors"
                        inputProps={{ 'aria-label': 'search tutors' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
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