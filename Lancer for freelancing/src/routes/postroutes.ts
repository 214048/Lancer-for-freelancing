import { Router } from 'express';
import { createPost, deletePost, listPosts, modifyPost } from '../controllers/postcontroller';
import { isAuthenticated } from '../middleware/authmiddleware';
const router = Router();

router.post('/create', createPost);
router.post('/remove', deletePost);
router.get('/list', listPosts);
router.post('/update', modifyPost);
router.post('/', isAuthenticated, createPost);
export default router;