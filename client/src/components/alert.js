import { useAppContext } from "../context/appContext";
import { Alert } from "@mui/material";

const ShowAlert = () => {
    const {alertText, alertType} = useAppContext();
    return(
        <Alert severity={alertType} className='m-2'>{alertText}</Alert>
    )
}

export default ShowAlert;