import { Router } from 'express';
import { postMatch, getMatches, checkIfMatchExists, updateMatch } from '../controllers/matches.controller.js';

const router = Router();

router.post('/matches', postMatch);
router.get('/matches/:userId', getMatches);
router.get('/checkmatch', checkIfMatchExists);
router.patch('/matches/updateMatch', updateMatch);

export default router;