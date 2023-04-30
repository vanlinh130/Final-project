const express = require('express');
const {
    createProduct,
    getaProduct,
    getallProduct,
    updateProduct,
    deleteProduct,
} = require('../controller/productCtrl');
const router = express.Router();

router.post('/', createProduct);
router.get('/:id', getaProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/', getallProduct);

module.exports = router;
