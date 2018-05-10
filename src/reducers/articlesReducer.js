import initialState from './initialState';
import { REQUEST_ARTICLES, RECEIVE_ARTICLES, REACHES_BOTTOM, LEAVES_BOTTOM, ALL_ARTICLES_RECEIVED } from '../actions/actionTypes';

export default function articles(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      console.log('REQUEST_ARTICLES Action');
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ARTICLES:
      console.log('RECEIVE_ARTICLES Action');
      return Object.assign({}, state, {
        countAlreadyLoadedArticles: state.countAlreadyLoadedArticles + 4,
        isFetching: false,
        articles: state.articles.concat(action.articles)
      });
    case REACHES_BOTTOM:
      console.log('REACHES_BOTTOM Action');
      return Object.assign({}, state, {
        isAtBottom: true
      });
    case LEAVES_BOTTOM:
      console.log('LEAVES_BOTTOM Action');
      return Object.assign({}, state, {
        isAtBottom: false
      });
    case ALL_ARTICLES_RECEIVED:
      return Object.assign({}, state, {
        allArticlesReceived: true
      });
    default:
      return state;
  }
}