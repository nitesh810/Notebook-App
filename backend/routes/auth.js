import { Router } from "express";
import User from '../models/User.js';
import { body, validationResult } from "express-validator";

const router = Router();

router.get('/', (req, res) => {
    res.json('hello there');
});

router.post('/add',
    [body('name', 'length must be greater than 2').isLength({min : 3}),
    body('email', 'Please enter correct email').isEmail(),
    body('password', 'Enter password greater than 4').isLength({min : 5})], 
    async (req, res) => {

    try {
        const errors = validationResult(req.body);
        if(!errors.isEmpty()) {
            return res.status(400).json({errors : errors.body});
        }

        let user = await User.findOne({email : req.body.email});
        if(user) {
            return res.status(400).json({'message' : 'email must be unique'});
        }

        user = User.create({
            "name" : "nitesh",
            "email" : "nitesh@gmail.com",
            "password" : "123456n"
        })

        await user.save();

        res.json(req.body);
        
    } catch (error) {
        console.log("something went wrong ", error.message);
        
    }
})

export default router;