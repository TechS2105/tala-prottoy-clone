import HomeBannerApi from '../api/Home/home_banner_api.js';
import HomeCardApi from '../api/Home/home_card_api.js';
import HomeProudParticipantApi from '../api/Home/home_proud_participant_api.js';
import AboutPageApi from '../api/About/about_page_api.js';
import GalleryStillImagesApi from '../api/Still/still_api.js';
import GalleryVideo from '../api/Video/gallery_video_api.js';
import PromotionOfInstallationArt from '../api/Promotion Of Installation Art/promotion_of_installation_art.js';
import SkillDevelopmentItems from '../api/Skill Development/skill_development_api.js';

/** Home Router */
const getHomeRouter = (req, res) => {

    res.render('../views/Home/index.ejs', {
        
        homeBanner: HomeBannerApi,
        homeCard: HomeCardApi,
        proudParticipant: HomeProudParticipantApi
    
    });

}

/** About Router  */
const getAboutRouter = (req, res) => {

    res.render('../views/About/About.ejs', {
        
        about: AboutPageApi,
        proudParticipant: HomeProudParticipantApi

    })

}

/** Contact Router */
const getContactRouter = (req, res) => {

    res.render('../views/Contact/Contact.ejs', {
        
        proudParticipant: HomeProudParticipantApi,
        pageName: "contact"

    });

}

/** Gallery Still Image Router */
const getGalleryStillImageRouter = (req, res) => {

    res.render('../views/Gallery/still/still.ejs', {
        
        stillImageData: GalleryStillImagesApi,
        proudParticipant: HomeProudParticipantApi

    });

}

/** Gallery Video Router */
const getGalleryVideoRouter = (req, res) => {

    res.render('../views/Gallery/video/video.ejs', {

        galleryVideo: GalleryVideo,
        proudParticipant: HomeProudParticipantApi

    });

}

/** Objective Promotion Of Installatio Art */
const getObjectivePromotionOfInstallationArt = (req, res) => {

    res.render('../views/Objective/Promotion Of Installation Art/promotionOfInstallationArt.ejs', {

        proudParticipant: HomeProudParticipantApi,
        promotionOfInstallation: PromotionOfInstallationArt 

    });

}

/** Objective Skill Development */
const getObjectiveSkillDevelopment = (req, res) => {

    res.render('../views/Objective/Skill Development/skill_development.ejs', {

        pageName: "skilldev",
        proudParticipant: HomeProudParticipantApi,
        skillDevelopmentItem: SkillDevelopmentItems

    });

}

export default {

    getHomeRouter,
    getAboutRouter,
    getContactRouter,
    getGalleryStillImageRouter,
    getGalleryVideoRouter,
    getObjectivePromotionOfInstallationArt,
    getObjectiveSkillDevelopment

}