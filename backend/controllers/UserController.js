const User = require("../models/User");
const bcrypt = require("bcrypt");
const validator = require ("validator");
const jwt = require("jsonwebtoken");

const logout = (request, response) => {
  try {
    response.send({status: true})
  } catch (e) {
    response.status(500).send("Error")
  }
}

const login = (request, response) => {
  try {
    const {email, password} = request.body;

    if (email && password) {
      if(!validator.isEmail(email)) {
        return response.send({
          error: true,
          message: "Not a valid email",
        });
      }

      User.findOne({ email: email}, (errorUser, user) => {
        if (!user) {
          return response.send({
            error: true,
            message: "User not found"
          });
        }
        
        bcrypt.compare(password, user.password, (err, result) => {
          if (err || !result) {
            return response.send({
              error: true,
              message: "Wrong password"
            }); 
          }
          const token = jwt.sign({email, password}, "secret", {expiresIn: 60})
  
          response.cookie("JWT_TOKEN", token)
  
          response.send({
            error: false,
            user: {
              email: user.email,
              name: user.name,
              last_name: user.last_name,
              username: user.username,
            }
          });
        });
      });
    } else {
      return response.send({
        error: true,
        message: "Complete both fields",
      })
    }
  } catch (e) {
    response.status(500).send(e)
  }
}

module.exports = {  
  login,
  logout,
}