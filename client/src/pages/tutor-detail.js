
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { Loading, TutorDetails } from '../components';
import { useEffect } from 'react';

const TutorDetail = () => {
    const { tutorId } = useParams();
    const { isLoading, tutor, getTutor } = useAppContext();
    
    useEffect(() => {
        getTutor(tutorId);
    }, [])

    if (isLoading) {
        return (
            <Loading />
        )
    }
    
    return (
        <div>
            {
                tutor && <TutorDetails tutor={tutor}/>
            }
        </div>
    )
}

export default TutorDetail;