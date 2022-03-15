import { UnauthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const auth = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || authHeader.startsWith(' Bearer')){
        throw new UnauthenticatedError('Authentication Invalid');
    }
    const token = authHeader.split(' ')[1];
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        //console.log(payload);
        req.user = {userId:payload.userId}
        next();
    }catch(err){
        throw new UnauthenticatedError('Authentication Invalid')
    }
}

export default auth;    