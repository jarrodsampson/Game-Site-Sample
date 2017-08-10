import store from '../Store';
import * as APIFunction from '../actions/API-data';
import _ from 'underscore';

/*
    API service file, good practice is to specify server in a variable so we can change/switch servers easily if needed
 */

var server = "https://api.dronestre.am/";


export function getAllDroneStrikes() {

    store.dispatch(APIFunction.setErrorStatus(false));
    store.dispatch(APIFunction.setLoadingStatus(true));

    return fetch(server + "data")
        .then(response => response.json())
        .then(json => {
            console.log("All Drone Strike Data", json);

            if (json.status === "OK") {
                store.dispatch(APIFunction.getAllDroneStrikesSuccess(_.sortBy(json.strike, function(item){ return item.date;}).reverse()));
                store.dispatch(APIFunction.setLoadingStatus(false));
            } else {
                store.dispatch(APIFunction.setErrorStatus(true));
                store.dispatch(APIFunction.setLoadingStatus(false));
            }
            return json;
        })
        .catch((err) => console.log(''));
}

/*
    Normal APP functions that can be stored in this, or, another file
 */

export function goBack() {
    window.history.back();
}

export function toggle(status) {
    store.dispatch(APIFunction.setToggleStatus(status));
}