import { Router } from 'express';
import { getUserRecipies, getOthersRecipies, createRecipie, getRecipie, updateRecipie, deleteRecipie } from '../controllers/recipies.controller.js';
import { uploadImageToServer } from '../controllers/image.controller.js';

const router = Router();

router.post('/recipies', createRecipie);
router.get('/recipiesOther', getOthersRecipies);
router.get('/recipies/:id', getUserRecipies);
router.get('/recipie/:id', getRecipie);
router.delete('/recipies/:id', deleteRecipie);
router.put('/recipies/:id', updateRecipie);
router.post('/image', uploadImageToServer);

export default router;