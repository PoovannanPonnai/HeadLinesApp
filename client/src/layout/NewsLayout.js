import React from 'react';
import Header from './Header';

const NewsLayout = props => {
  return (
    <React.Fragment>
      <Header />
      <section id="home-articles" className="py-2">
        <div className="container">{props.children}</div>
      </section>
    </React.Fragment>
  );
};

export default NewsLayout;
