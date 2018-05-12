import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function fetchArticles({ skip = 0 }) {
  return dispatch => {
    dispatch({type: types.REQUEST_ARTICLES});

    fetch(`http://35.185.4.57/:4040/api/articles?limit=${4}&skip=${skip}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((resp) => resp.json())
      .then((resp) => {
        if (resp.length < 4) {
          dispatch({type: types.ALL_ARTICLES_RECEIVED});
        }

        dispatch({
          type: types.RECEIVE_ARTICLES,
          articles: resp
        });
      });
  };
}

export function reachesBottom() {
  return dispatch => {
    dispatch({type: types.REACHES_BOTTOM});
  };
}

export function leavesBottom() {
  return dispatch => {
    dispatch({type: types.LEAVES_BOTTOM});
  };
}
