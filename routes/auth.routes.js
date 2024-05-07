/**
 * POST localhost:8080/ecomm/api/v1/auth/signup
 */
/**
 * I need to intercept this
 */
const authController = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth.mw")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/signup", [authMW.verifySignUpBody], authController.signup)    
}

// if a POST call is make at this api /ecomm/api/v1/auth/signup, then the control will handover to the authController.signup and 
//  signup method should be called   