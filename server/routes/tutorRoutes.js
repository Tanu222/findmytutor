const express = require('express');
const {addTutor,getAllTutors, getTutor,updateTutor,deleteTutor, searchTutor} = require('../controllers/tutorController');

const router = express.Router();

router.post('/add',addTutor);
router.get('/get-all',getAllTutors);
router.get('/get/:id',getTutor);
router.patch('/update/:id',updateTutor); 
router.delete('/delete/:id',deleteTutor);
router.get('/search',searchTutor);

module.exports = {
  routes: router
}