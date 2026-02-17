import express from 'express';
import getRouterController from '../controllers/getRouterController.js';
import postRouterController from '../controllers/postRouterController.js';

const router = express.Router();

router.get('/', getRouterController.getHomeRouter); // index router
router.get('/about', getRouterController.getAboutRouter); // about router
router.get('/promotion-of-installation-art', getRouterController.getObjectivePromotionOfInstallationArt);
router.get('/skill-development', getRouterController.getObjectiveSkillDevelopment);
router.get('/still', getRouterController.getGalleryStillImageRouter); // gallery still image router
router.get('/video', getRouterController.getGalleryVideoRouter); // gallery video router
router.get('/contact', getRouterController.getContactRouter); // contact router
router.post('/api/send/form/:pageName', postRouterController.postContactForm); // Mail Router

export default router;