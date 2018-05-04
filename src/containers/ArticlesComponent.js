import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articlesActions from '../actions/articlesActions';
import PropTypes from 'prop-types'

class ArticlesComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.articlesActions.fetchArticles();
  }

  render() {
    let renderingArticles = this.props.articles.map((article) => {
      return (
        <div key={article.articleId} className='card'>
          <h4 className='title'>{article.title}</h4>
          <div className="content">{article.content}</div>
          <div className="share-on-twitter">
            <i className='fa fa-twitter'></i>
          </div>
        </div>
      )
    });

    return (
      <div>
        {this.props.isFetching && <div className='snipper__wrapper'><div className='spinner'></div></div>}
        <h1>Articles Component!</h1>
        <div className='articles'>
          {renderingArticles}
        </div>
      </div>
    )
  }
}

ArticlesComponent.propTypes = {
  articlesActions: PropTypes.object,
  articles: PropTypes.array
}

function mapStateToProps(state) {
  console.log(state)
  return {
    articles: state.articlesReducer.articles,
    isFetching: state.articlesReducer.isFetching
  };
}

function mapDispatchToProps(dispatch) {
  return {
    articlesActions: bindActionCreators(articlesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesComponent);
