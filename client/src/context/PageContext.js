import React, { useState } from 'react';

export const PageContext = React.createContext({
  pageNumber: 1,
  searchString: '',
  pageNavigationHandler: () => {},
  searchHandler: () => {}
});

const PageContextProvider = props => {
  const [pageData, setPageData] = useState({
    pageNumber: 1,
    searchString: ''
  });

  const searchHandler = searchString => {
    setPageData({ pageNumber: 1, searchString });
  };

  const pageNavigationHandler = page => {
    if (page === 'pre' && pageData.pageNumber === 1) {
      return false;
    }
    let pageNumber =
      page === 'pre' ? pageData.pageNumber - 1 : pageData.pageNumber + 1;

    setPageData({ ...pageData, pageNumber });
  };

  return (
    <PageContext.Provider
      value={{
        pageNumber: pageData.pageNumber,
        searchString: pageData.searchString,
        searchHandler: searchHandler,
        pageNavigationHandler: pageNavigationHandler
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
