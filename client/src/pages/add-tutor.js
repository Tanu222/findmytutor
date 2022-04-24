import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';
import '../assets/styles/add-tutor.css';
import { useAppContext } from '../context/appContext';
import { ShowAlert, StyledDropzone } from '../components';


const AddTutor = () => {
    const { createTutor, user, displayAlert, showAlert } = useAppContext();
    const navigate = useNavigate();
    const [imageUrl,setImageUrl] = useState('https://randomuser.me/api/portraits/women/32.jpg');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');

    const putImageUrl =(imageUrl)=>{
        //console.log('setting image url');
        setImageUrl(imageUrl);
    }

    const onSubmit = () => {
        if (!location || !description || !skills) {
            displayAlert('please provide all values', 'error');
            return;
        }
        setTimeout(() => {
            //console.log(values.skills);
            //console.log(imageUrl);
            let tutor = {
                location: location,
                description: description,
                skills: skills.split(" "),
                github: github,
                linkedin: linkedin,
                imageUrl: imageUrl ,
                email: user.email,  
                name: user.username
            }
            //console.log(tutor);
            createTutor(tutor);
            setTimeout(() => {
                navigate('/');
            }, 3000)

        }, 400);
        
    }


    return (
        <div className='d-flex justify-content-center m-3'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className='text-center display-6'>Register As a Tutor</div>
                {
                    showAlert && <ShowAlert />

                }
                <div>
                    <TextField id="outlined-required"
                        label="location"
                        variant="outlined"
                        value={location}
                        name='location'
                        onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div>
                    <TextField
                        id="outlined-helperText-required"
                        label="Skills"
                        helperText="Separate the skills with space" value={skills}
                        name='skills'
                        onChange={(e) => setSkills(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-static-required"
                        label="Description"
                        multiline
                        rows={4}
                        value={description}
                        name='description'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <TextField id="outlined-required"
                        label="Linkedin Profile"
                        variant="outlined"
                        value={linkedin}
                        name='linkedin'
                        onChange={(e) => setLinkedin(e.target.value)} />
                </div>
                <div>
                    <TextField id="outlined-required"
                        label="Github Profile"
                        variant="outlined"
                        value={github}
                        name='github'
                        onChange={(e) => setGithub(e.target.value)} />
                </div>
                <p>Upload Your Profile Image</p>
                <StyledDropzone putImageUrl={putImageUrl}/>
                <div className='d-flex justify-content-center'>
                    <Button variant="contained" onClick={onSubmit} className='m-2'>Submit</Button>
                </div>
            </Box>
        </div>
    )
}

export default AddTutor;