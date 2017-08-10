import * as types from '../actions/action-types';

// Dummy Data File
import * as sampleData from '../sample/SampleData';

/*
    This is where all initial data is set
 */

const initialState = {
    droneStrikes: [],
    errorStatus: false,
    isLoading: true,
    toggleBlock: false,
    slideshowBanner: sampleData.slideshows,
    parallaxImage: sampleData.paraImage,
    carouselData: sampleData.carouselData,
    videoIdData: sampleData.videoId
};


const APIReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_ALL_DRONE_STRIKES:
            return Object.assign({}, state, { droneStrikes: action.strikes });
        case types.GET_LOADING_STATUS:
            return Object.assign({}, state, { isLoading: action.status });
        case types.GET_ERROR_STATUS:
            return Object.assign({}, state, { errorStatus: action.errorStatus });
        case types.GET_TOGGLE_STATUS:
            return Object.assign({}, state, { toggleBlock: action.statusToggle });
        default:

    }

    return state;

};

export default APIReducer;