import {combineReducers} from 'redux';
import PostReducers from './PostReducers';

const rootReducer = combineReducers({
    Posts: PostReducers
})

export default rootReducer;