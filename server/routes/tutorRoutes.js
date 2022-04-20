const express = require('express');
const {addTutor,getAllTutors, getTutor,updateTutor,deleteTutor} = require('../controllers/tutorController');

const router = express.Router();

router.post('/add',addTutor);
router.get('/get-all',getAllTutors);
router.get('/get/:id',getTutor);
router.patch('/update/:id',updateTutor); 
router.delete('/delete/:id',deleteTutor);

module.exports = {
  routes: router
}