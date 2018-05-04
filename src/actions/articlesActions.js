import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function fetchArticles() {
  return dispatch => {
    dispatch({type: types.REQUEST_ARTICLES});

    setTimeout(() => {
      dispatch({
        type: types.RECEIVE_ARTICLES,
        articles: [{
            articleId: 1,
            title: "MI Stays at the bottom of the table after day 36",
            content: "This is a news about MI staying at the bottom of the table even after trying hard. This is a news about MI staying at the bottom of the table even after trying hard. This is a news about MI staying at the bottom of the table even after trying hard. This is a news about MI staying at the bottom of the table even after trying hard. This is a news about MI staying at the bottom of the table even after trying hard."
          }, {
            articleId: 2,
            title: "MI Stays at the bottom of the table after day 36",
            content: "This is a news about MI staying at the bottom of the table even after trying hard. This is a news about MI staying at the bottom of the table even after trying hard. This is a news about MI staying at the bottom of the table even after trying hard. This is a news about MI staying at the bottom of the table even after trying hard. This is a news about MI staying at the bottom of the table even after trying hard."
          }
        ]
      })
    }, 500); // Faking async.
  };
}
