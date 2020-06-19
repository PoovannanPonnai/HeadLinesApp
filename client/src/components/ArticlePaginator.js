import React, { useContext } from 'react';
import { PageContext } from '../context/PageContext';

const ArticlePaginator = () => {
  const pageContext = useContext(PageContext);
  const pageNavigationHandler = action => {
    pageContext.pageNavigationHandler(action);
  };
  return (
    <footer id="main-footer" className="py-2s">
      <div className="container footer-container">
        <div>
          <button
            className="btn round-corner"
            onClick={() => {
              pageNavigationHandler('pre');
            }}
          >
            Previous
          </button>
        </div>
        <div>
          <button
            className="btn round-corner"
            onClick={() => {
              pageNavigationHandler('next');
            }}
          >
            Next
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ArticlePaginator;
