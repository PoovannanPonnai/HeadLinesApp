import React, { useEffect, useContext } from 'react';
import { PageContext } from '../context/PageContext';
import ArticlePage from './ArticlePage';
import useHttp from '../hooks/http';

const ArticlePageContainer = () => {
  const pageContext = useContext(PageContext);
  const { isLoading, error, data, sendRequest } = useHttp();

  useEffect(() => {
    const params = new URLSearchParams({
      page: pageContext.pageNumber,
      searchString: pageContext.searchString
    });
    let url = process.env.REACT_APP_SERVER_URL + '/getNews?' + params;
    sendRequest(url, 'GET');
  }, [pageContext.searchString, pageContext.pageNumber, sendRequest]);

  return <ArticlePage error={error} isLoading={isLoading} data={data} />;
};

export default ArticlePageContainer;
