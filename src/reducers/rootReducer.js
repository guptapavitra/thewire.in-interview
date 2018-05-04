import {combineReducers} from 'redux';
import articles from './articlesReducer';

const rootReducer = combineReducers({
  articlesReducer: articles
});

export default rootReducer;