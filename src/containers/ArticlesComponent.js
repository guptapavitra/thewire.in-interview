import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articlesActions from '../actions/articlesActions';
import PropTypes from 'prop-types'
import CroppedContent from '../component/CroppedContent';

class ArticlesComponent extends Component {
  constructor(props) {
    super(props);

    this.endElement = React.createRef();
  }

  isElementInViewport (el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }

  componentWillMount() {
    let that = this;
    this.props.articlesActions.fetchArticles({ skip: this.props.countAlreadyLoadedArticles });

    let oldOnScroll = window.onscroll;
    window.onscroll = function() {
      oldOnScroll && oldOnScroll.apply(window);

      if (!that.props.isAtBottom) {
        if (that.isElementInViewport(that.endElement.current)) {
          that.props.articlesActions.reachesBottom();
          !that.props.isFetching
            && !that.props.allArticlesReceived
            && that.props.articlesActions.fetchArticles({ skip: that.props.countAlreadyLoadedArticles });
        }
      } else {
        if (!that.isElementInViewport(that.endElement.current)) {
          that.props.articlesActions.leavesBottom();
        }
      }
    }
  }

  render() {
    let renderingArticles = this.props.articles.map((article) => {
      return (
        <div key={article._id} className='card'>
          <h5 className='title'>{article.articleTitle}</h5>
          <span className='date'>{new Date (article.createdAt.substr(0, 10)).toString().substr(0, 16)}</span>
          <div className="content">
            <CroppedContent content={article.articleContent}></CroppedContent>
            &nbsp;
            <button>Read More</button>
          </div>
          <div className="share-on-twitter">
            <a className="twitter-share-button"
              href={`https://twitter.com/intent/tweet?text=${article.articleTitle}.`}
              data-size="large">
            Tweet</a>
          </div>
        </div>
      )
    });

    return (
      <div>
        <h1>Articles Component!</h1>
        <div className='articles'>
          {renderingArticles}
        </div>
        <div className="end" style={{"marginBottom": "20px"}} ref={this.endElement}></div>
        {this.props.isFetching && <div className='snipper__wrapper'><div className='spinner'></div></div>}
        {this.props.allArticlesReceived && <div>That's all, folks!</div>}
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
    isFetching: state.articlesReducer.isFetching,
    countAlreadyLoadedArticles: state.articlesReducer.countAlreadyLoadedArticles,
    isAtBottom: state.articlesReducer.isAtBottom,
    allArticlesReceived: state.articlesReducer.allArticlesReceived
  };
}

function mapDispatchToProps(dispatch) {
  return {
    articlesActions: bindActionCreators(articlesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesComponent);
