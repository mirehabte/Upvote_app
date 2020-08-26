const express = require('express')
const router = express.Router()
const Vote = require('../models/Vote');

// Add new vote 

router.post('/', async(req,res) => {

   let newVote = await Vote.findOne({ email: req.body.email })
   if(newVote) return res.status(400).json({ message: "You already voted" })

 newVote = new Vote({
   title: req.body.title,
   description: req.body.description,
   vote: req.body.vote,
   email: req.body.email   
})
try{    
    const result = await newVote.save()
    res.status(201).json(result)            
}catch(err){
    res.status(400)       
       .json({ message: "Error creating new vote" })         
}
})



// Displaying all votes

router.get('/', async(req,res) => {
    try{
        const allVotes = await Vote
                                 .find()
                                 .select('_id -_id -__v')   
                              res.json(allVotes);                                
    }catch(err) {
        res.status(500).send('Error displaying votes', err)        
    }
})

module.exports = router;