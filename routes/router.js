import express from 'express';
import getRouterController from '../controllers/getRouterController.js';
import postRouterController from '../controllers/postRouterController.js';

const router = express.Router();

router.get('/', getRouterController.getHomeRouter); // index router
router.get('/about', getRouterController.getAboutRouter); // about router
router.get('/contact', getRouterController.getContactRouter); // contact router
router.post('/api/send/form/:pageName', postRouterController.postContactForm); // Mail Router

export default router;