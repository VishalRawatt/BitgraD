const express = require('express');
const router = express.Router();
const questionDB = require('../models/Question.js');

router.post('/',async(req,res) => {
    console.log(req.body)
    try{
        await questionDB.create({
            questionName: req.body.questionName,
            questionUrl: req.body.questionUrl,
            user: req.body.user
        }).then(()=>{
            res.status(201).send({
                status: true,
                message: "Question added successfully"
            })
        }).catch((err)=>{
            res.status(400).send({
                status: false,
                message: "Bad request"
        })
    })
}
    catch(err){
        res.status(500).send({
            status: false,
            message: "Error while adding question"
        })
    }
})
router.get('/', async(req,res)=>{
    try{
        await questionDB.aggregate([
            {
                $lookup:{
                    from: "answers", //which collection to join
                    localField: "_id",//field from input
                    foreignField: "questionId", //answers k field m questionId hai ek
                    as: "allAnswers" //output inside array
                }
            }
        ]).exec().then((doc)=>{
            res.status(200).send(doc)
        }).catch((err)=>{
            res.status(400).send({
                status: false,
                message: "Unable to get question"
            })
        })
    }
    catch(err){
        res.status(500).send({
            status: false,
            message: "Unexpected error"
        })
    }
})

module.exports = router