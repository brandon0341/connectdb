const express = require('express')
const userModel = require('../model/userModel')
const mongoose = require('mongoose')


const router = express.Router()

// --------- endpoint


router.post('/', async (req, res) => {
    
    try {

        const {firstName, lastName } = req.body

        const createData = await userModel.create({ firstName, lastName })

        return res.json(createData)
        
    } catch (error) {
        console.log(error)
    }


})


// get all data
router.get('/getData' , async (req, res) => {
    try {

        const allData = await userModel.find({});

        if(allData) {
            return res.json(allData);
        }

        return res.json({ message: "no data"});

        
    } catch (error) {
        console.log(error)
    }
    
})


// get single data
router.get('/:id', async (req, res) => {

    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ message: "sorry invalid Id" })
    }

    const dataSingle = await userModel.findById(id)

    res.json(dataSingle)

})



// update

router.patch('/:id', async (req, res) => {
    const { id } = req.params
    const newData = req.body
    const updateData = await userModel.findByIdAndUpdate(id, newData, {new: true})

    return res.json(updateData)
})



// delete
router.delete('/:id', async (req, res)=> {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({ message: "sorry invalid Id" })
    }

    const deleteData = await userModel.findByIdAndDelete(id)

    return res.json(deleteData)
})




module.exports = router




