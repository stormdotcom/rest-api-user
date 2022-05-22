import jwt from "jsonwebtoken";

const config = process.env;

export const verifyToken = (req, res, next)=> {
    try {
        let token =  req.query.token || req.headers['authorization'];

        if(!token) return res.status(403).send("token required for Authentication")
    
        token = token.split(" ")[1];
    
        const decodedToken = jwt.verify(token, config.SECRET_KEY)

        req.user=decodedToken
        next()
    } catch (error) {
          console.log(error.message);
          res.status(401).send("token required for Authentication")
    }
 
} 