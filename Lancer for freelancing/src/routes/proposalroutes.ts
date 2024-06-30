import { Router } from 'express';
import { addProposal } from '../controllers/proposalcontroller';

const router = Router();

router.post('/', addProposal);

export default router;