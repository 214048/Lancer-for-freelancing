import { Router } from 'express';
import { login} from '../controllers/authcontroller';

const router = Router();

router.post('/login', login);

export default router;
