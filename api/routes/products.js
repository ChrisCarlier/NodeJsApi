const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

// POST
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    });
});

// GET by ID
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message : 'This is the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message : 'This is an ID'

        });
    }
});

// PATCH
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message : 'Updated product'
    });
});

// DELETE
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message : 'Deleted product'
    });
});

module.exports = router;