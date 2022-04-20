const { UnauthenticatedError } = require("../errors/index.js");
const jwt = require('jwt-simple');

const auth = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('Authentication Invalid');
    }
    const token = authHeader.split(' ')[1];
    try{
        const payload = jwt.decode(token,process.env.JWT_SEED);
        if (!payload.sub) {
            console.log('User Authorization: UserId is missing in the token for url:' + req.originalUrl);
            throw new UnauthenticatedError('Authentication Invalid');
        }
        req.user = {userId:payload.userId}
        next();
    }catch(err){
        throw new UnauthenticatedError('Authentication Invalid')
    }
}

module.exports =auth;    