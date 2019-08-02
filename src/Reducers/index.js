import { combineReducers } from 'redux';
<<<<<<< HEAD
import { reducer as formReducer } from 'redux-form';
=======
import {reducer as formReducer} from 'redux-form';
>>>>>>> 2d5dc8bd8753c92608093dccf8565318005fb9a5
import { bannerReducer } from './banner';
import { userReducer } from './user';

export const rootReducer = combineReducers({
    banner: bannerReducer,
    user: userReducer,
    form: formReducer
});
