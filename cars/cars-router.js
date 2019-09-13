const express = require('express');
const Cars = require('./cars-model.js')

const router = express.Router();

router.get('/', (req, res) => {
    Cars.get()
        .then(cars => res.status(200).json(cars))
        .catch(err => res.status(200).json({ message: "Sorry cannot retrieve data" }))
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Cars.getById(id)
        .then(car => {
            //checking if book exists
            if (car) {
                res.status(200).json(car);
            } else {
                res.status(400).end({ message: "Sorry there's an error retrieving the data" })
            }
        })
})


module.exports = router;