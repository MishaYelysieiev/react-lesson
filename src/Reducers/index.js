import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { bannerReducer } from './banner';
import { userReducer } from './user';

export const rootReducer = combineReducers({
    banner: bannerReducer,
    user: userReducer,
    form: formReducer
});
