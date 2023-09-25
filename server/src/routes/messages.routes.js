import { Router } from 'express';
import { postMessage, getConversation } from '../controllers/messages.controller.js';

const router = Router();

router.post('/message', postMessage);
router.get('/conversation/:userId1/:userId2', getConversation);

export default router;