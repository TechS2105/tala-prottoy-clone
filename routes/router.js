import express from 'express';
import getRouterController from '../controllers/getRouterController.js';

const router = express.Router();

router.get('/', getRouterController.getHomeRouter);

export default router;