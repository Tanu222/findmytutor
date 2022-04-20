'use strict';

const db = require('../db');
const { BadRequestError, NotFoundError,UnauthenticatedError } = require('../errors/index');
const { StatusCodes } = require('http-status-codes');
const User = require('../models/user');
const dotenv = require('dotenv');
const jwt = require('jwt-simple/index');
dotenv.config();


// Get a database reference to our blog

const userRef = db.collection("users");

const createSendToken = (action,user,req,res) =>{
    //console.log("user",user);
    let payload = {
        iss: req.hostname,
        sub: user.email,
        exp: process.env.JWT_LIFETIME
    }
    let token = jwt.encode(payload, process.env.JWT_SEED);
    res.status(StatusCodes.OK).send({
        success:true,
        action:action,
        user:user,
        token:token
    })
}

const login = async(req,res,next) =>{
    let {email,password} = req.body;
    if(!email || !password){
        throw new BadRequestError('please provide all values');
    }
    let storedPassword = '';
    const queryRef = await userRef.where('email','==',email).get();
    if (queryRef.empty) {
       throw new UnauthenticatedError('User is not registered');
    }
    let user = {
        email: queryRef.docs[0].data().email,
        username: queryRef.docs[0].data().username
    };
    storedPassword = queryRef.docs[0].data().password;
    if(storedPassword!==password){
       throw new UnauthenticatedError('Password is Incorrect');
    }
    createSendToken('login',user,req,res);
}

const register = async (req, res, next) => {
    const { username, email,password } = req.body;
    //console.log(req.body);
    if (!username || !email || !password) {
        throw new BadRequestError('please provide all values');
    }
    const queryRef = await userRef.where('email','==',email).get();
    if (!queryRef.empty) {
       throw new BadRequestError('Email Already in use');
    }  
    const data = req.body;
    await db.collection('users').doc().set(data);
    createSendToken('register',data,req,res);
};

const updateUser = async(req,res)=>{
    const id = req.params.id;
    const {email,username,location,imageUrl} = req.body;
    const data = req.body;
    if(!email || !username|| !imageUrl || !location){
       throw new BadRequestError('Please provide all values');
    }
    const user = await db.collection('users').doc(id);
    const foundUser = await user.get();
    if (!foundUser.exists) {
        throw new NotFoundError('Tutor not found with id' + id)
    }
    await user.update(data);
    res.status(StatusCodes.OK).send(data);
}

module.exports = {register,login,updateUser};
