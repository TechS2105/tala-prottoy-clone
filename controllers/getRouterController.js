import HomeBannerApi from '../api/Home/home_banner_api.js';
import HomeCardApi from '../api/Home/home_card_api.js';
import HomeProudParticipantApi from '../api/Home/home_proud_participant_api.js';
import AboutPageApi from '../api/About/about_page_api.js';

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

export default {

    getHomeRouter,
    getAboutRouter,
    getContactRouter

}