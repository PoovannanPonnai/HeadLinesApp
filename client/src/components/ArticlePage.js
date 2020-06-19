import React from 'react';

import ArticleList from './ArticleList';
import ArticlePaginator from './ArticlePaginator';
import ArticleNotFound from '../components/ArticleNotFound';
import Loader from './Loader';
import ErrorPage from './ErrorPage';

const ArticlePage = ({ error, isLoading, data }) => {
  return (
    <React.Fragment>
      {error && <ErrorPage />}

      {isLoading && <Loader />}

      {(data && data.totalResults && (
        <div className="articles-container">
          <ArticleList data={data} />
        </div>
      )) ||
        (data && !data.totalResults && <ArticleNotFound />)}

      {data && data.pageNavigation && <ArticlePaginator />}
    </React.Fragment>
  );
};

export default ArticlePage;
