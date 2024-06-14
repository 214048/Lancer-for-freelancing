import { Router } from 'express';
import { registerUser, deleteUser, listUsers,  } from '../controllers/usercontroller';
import {getUserProfile} from'../controllers/getuserdata'
const router = Router();

router.post('/register', registerUser); //admin manually registers users
router.post('/remove', deleteUser); //removing users
router.get('/list', listUsers); //list available users
router.get('/profile/:username', getUserProfile); //  for making user profile user profile

export default router;
