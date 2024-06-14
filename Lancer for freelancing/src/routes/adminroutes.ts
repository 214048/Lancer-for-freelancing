import { Router } from 'express';
import { isAuthenticated, isAdmin } from '../middleware/authmiddleware';

const router = Router();

router.get('/dashboard', isAuthenticated, isAdmin, (req, res) => {
    res.sendFile('admin-dashboard.html', { root: 'public' });
});

export default router;
