import React from 'react';
import Article from './Article';

const ArticleList = ({ data }) => {
  return !data
    ? null
    : data.articles.map((article, index) => {
        return (
          <Article
            key={index}
            tilte={article.title}
            content={article.description}
            url={article.url}
            imgUrl={article.urlToImage}
          />
        );
      });
};

export default ArticleList;
