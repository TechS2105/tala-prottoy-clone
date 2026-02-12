import express from 'express';
import getRouterController from '../controllers/getRouterController.js';

const router = express.Router();

router.get('/', getRouterController.getHomeRouter);
router.get('/about', getRouterController.getAboutRouter);

export default router;