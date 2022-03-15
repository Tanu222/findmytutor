const express = require('express');
const {addTutor,getAllTutors, getTutor,updateTutor,deleteTutor} = require('../controllers/tutorController');

const router = express.Router();

router.post('/tutor',addTutor);
router.get('/tutors',getAllTutors);
router.get('/tutor/:id',getTutor);
router.patch('/tutor/:id',updateTutor);
router.delete('/tutor/:id',deleteTutor);

module.exports = {
  routes: router
}