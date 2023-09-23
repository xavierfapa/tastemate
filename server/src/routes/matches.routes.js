import { Router } from 'express';
import { postMatch, getMatches } from '../controllers/matches.controller.js';

const router = Router();

router.post('/matches', postMatch);
router.get('/matches/:userId', getMatches);

export default router;