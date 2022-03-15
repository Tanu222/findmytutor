'use strict';

const db = require('../db');

const Tutor = require('../models/tutor');

const addTutor = async(req,res ,next) =>{
    try {
        const data = req.body;
        //console.log(req.body);
        await db.collection('tutors').doc().set(data);
        console.log('Ater getting collection');
        res.send('Record saved successfully');
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
};

const getAllTutors = async (req, res, next) => {
    try {
        const tutors = await db.collection('tutors');
        const data = await  tutors.get();
        const tutorsArray = [];
        if(data.empty) {
            res.status(404).send('No tutor record found');
        }else {
            data.forEach(doc => {
                const tutor = new Tutor(
                    doc.id,
                    doc.data().name,
                    doc.data().skills,
                    doc.data().imageUrl,
                    doc.data().location,
                    doc.data().description
                );
                tutorsArray.push(tutor);
            });
            res.send(tutorsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getTutor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const tutor = await db.collection('tutors').doc(id);
        const data = await tutor.get();
        if(!data.exists) {
            res.status(404).send('Tutor with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateTutor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const tutor =  await db.collection('tutors').doc(id);
        await tutor.update(data);
        res.send('Tutor record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteTutor = async (req, res, next) => {
    try {
        const id = req.params.id;
        await db.collection('tutors').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports={
    addTutor,getAllTutors,getTutor,updateTutor,deleteTutor
}