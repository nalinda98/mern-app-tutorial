import express from 'express';
// import { addBooking, fetchBookings } from '../controllers/bookingController.js';
import { authenticateToken } from '../middleware/authenticateToken.js';
import { isAdmin,isSuperAdmin } from '../middleware/isAdmin.js';
import { dateEnable, fetchDatesEnable } from '../controllers/dateController.js';

const router = express.Router();

router.post('/',authenticateToken, isSuperAdmin, dateEnable);
router.get('/',fetchDatesEnable);

export default router;