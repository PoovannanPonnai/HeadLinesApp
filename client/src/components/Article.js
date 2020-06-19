import React from 'react';

const Article = ({ tilte, content, url, imgUrl }) => {
  return (
    <article className="card">
      <h3>
        <a href={url}>{tilte}</a>
      </h3>
      <p>{content}</p>
      <img src={imgUrl} alt="" />
    </article>
  );
};

export default Article;
