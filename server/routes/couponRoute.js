const express = require('express');
const { createCoupon, getAllCoupons, updateCoupon, deleteCoupon, getCoupon } = require('../controller/couponCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, isAdmin, createCoupon);
router.get('/', getAllCoupons);
router.get('/:id', getCoupon);
router.put('/:id', authMiddleware, isAdmin, updateCoupon);
router.delete('/:id', authMiddleware, isAdmin, deleteCoupon);

module.exports = router;
