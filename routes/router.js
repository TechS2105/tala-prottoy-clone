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
router.get('/durga-puja-art/event/:eventYear', getRouterController.getDurgaPujaArtEventYear); // durga puja art year dynamic router
router.get('/:artWorkPrivilegeEntryPage', getRouterController.getArtWorkthroughPrivilegeEntry); // art work and privilege entry router
router.post('/contact-form', postRouterController.postContactForm); // contact page form router
router.post('/skill-development-form', postRouterController.postSkillDevelopmentForm); // skill development page form router
router.post('/art-walk-through-form', postRouterController.postArtWalkThroughForm); // art walk trhough page form router
router.post('/privilege-entry-form', postRouterController.postPrivilegeEntryFrom); // privilege entry page form router

export default router;