import express from 'express';
import { addBooking, fetchBookingDetails, fetchBookings, updateBookingStatus } from '../controllers/bookingController.js';
import { authenticateToken } from '../middleware/authenticateToken.js';
import { isAdmin } from '../middleware/isAdmin.js';

const router = express.Router();

router.post('/',authenticateToken, isAdmin, addBooking);

router.get('/', fetchBookings);

router.get('/details',authenticateToken, isAdmin, fetchBookingDetails);

router.post('/updateStatus',authenticateToken, isAdmin, updateBookingStatus);

export default router;