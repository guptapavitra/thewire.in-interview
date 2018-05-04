import initialState from './initialState';
import { REQUEST_ARTICLES, RECEIVE_ARTICLES } from '../actions/actionTypes';

export default function articles(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      console.log('REQUEST_ARTICLES Action')
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ARTICLES:
      console.log('RECEIVE_ARTICLES Action')
      return Object.assign({}, state, {
        isFetching: false,
        articles: action.articles
      });
    default:
      return state;
  }
}