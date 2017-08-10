import { combineReducers } from 'redux';

import ServiceReducer from './Service-reducer';
// Combine Reducers in here
var reducers = combineReducers({
    api: ServiceReducer
});

export default reducers;