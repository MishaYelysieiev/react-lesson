import { combineReducers } from 'redux';

import { bannerReducer } from './banner';
import { userReducer } from './user';

export const rootReducer = combineReducers({
    banner: bannerReducer,
    user: userReducer
});
