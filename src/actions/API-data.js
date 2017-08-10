import * as types from './action-types';

/*
    Pure functions for setting new values to specific parts of application
 */
export function getAllDroneStrikesSuccess(strikes) {
    return {
        type: types.GET_ALL_DRONE_STRIKES,
        strikes
    };
}


export function setLoadingStatus(status) {
    return {
        type: types.GET_LOADING_STATUS,
        status
    };
}

export function setErrorStatus(errorStatus) {
    return {
        type: types.GET_ERROR_STATUS,
        errorStatus
    };
}

export function setToggleStatus(statusToggle) {
    return {
        type: types.GET_TOGGLE_STATUS,
        statusToggle
    };
}