const User = require("../models/User.model");

// controller to create user

const createUser = async(req, res) => {
    try{
       const {username, email} = req.body;

       // create new user

       const newUser = new User({
        username, email
       })

       // save user

       await newUser.save()

       return res.status(201).json({message : "User created", user: newUser})
       
    }catch(err){
        console.log("err", err.message)
    }
}

// function to get users

const getUsers = async(req, res) => {
    try{
       // Pagination
       // get page number
       const page = parseInt(req.query.page) || 1;
       // get the set limit
       const limit = parseInt(req.query.limit) || 3;

        // how many docs/users to skip
       const skip = (page - 1) * limit;
       // pipeline
       const data = await User.aggregate([
        // stage 1
        {
           $sort : {
             createdAt : -1 // recently created users will come at top
           }
        },
        // stage 2
        {
         $skip : skip
        },
        // stage 3
        {
          $limit : limit
        }
       ])

       // return response
       // 200 - success (OK)
       return res.status(200).json({message : "fetched users", data})

    }catch(err){
      console.log("err", err)
    }
}

module.exports = {createUser, getUsers}