'use strict';

const db = require('../db');
const { BadRequestError, NotFoundError } = require('../errors/index');
const { StatusCodes } = require('http-status-codes');
const Tutor = require('../models/tutor');

const addTutor = async (req, res, next) => {
    const { name, skills, location } = req.body;
    console.log(req.body);
    if (!name || !skills || !location) {
        throw new BadRequestError('please provide all values');
    }
    const data = req.body;
    await db.collection('tutors').doc().set(data);
    res.status(StatusCodes.CREATED).json(data);
};

const getAllTutors = async (req, res, next) => {
    const tutors = await db.collection('tutors');
    const data = await tutors.get();
    const tutorsArray = [];
    if (data.empty) {
        throw new NotFoundError('No tutors found')
    } else {
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
}

const getTutor = async (req, res, next) => {
    const id = req.params.id;
    const tutor = await db.collection('tutors').doc(id);
    const data = await tutor.get();
    if (!data.exists) {
        throw new NotFoundError('Tutor not found with id' + id);
    } else {
        res.send(data.data());
    }
}

const updateTutor = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    const { name, skills, location } = req.body;
    if (!name || !skills || !location) {
        throw new BadRequestError('please provide all values');
    }
    const tutor = await db.collection('tutors').doc(id);
    if (!tutor.exists) {
        throw new NotFoundError('Tutor not found with id' + id)
    }
    await tutor.update(data);
    res.send('Tutor record updated successfuly');
}

const deleteTutor = async (req, res, next) => {
    const id = req.params.id;
    const tutor = await db.collection('tutors').doc(id);
    const data = await tutor.get();
    if (!data.exists) {
        throw new NotFoundError('Tutor not found with id ' + id)
    }
    await db.collection('tutors').doc(id).delete();
    res.send('Record deleted successfuly');
}

module.exports = {
    addTutor, getAllTutors, getTutor, updateTutor, deleteTutor
}