import HomeBannerApi from '../api/home_banner_api.js';
import HomeCardApi from '../api/home_card_api.js';
import HomeProudParticipantApi from '../api/home_proud_participant_api.js';

const getHomeRouter = (req, res) => {

    res.render('../views/Home/index.ejs', {
        
        homeBanner: HomeBannerApi,
        homeCard: HomeCardApi,
        homProudParticipant: HomeProudParticipantApi
    
    });

}

export default {

    getHomeRouter

}