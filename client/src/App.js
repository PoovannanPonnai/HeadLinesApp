import React from 'react';
import NewsLayout from './layout/NewsLayout';
import ArticlePageContainer from './components/ArticlePageContainer';
import PageContextProvider from './context/PageContext';
import './index.css';

function App() {
  return (
    <PageContextProvider>
      <NewsLayout>
        <ArticlePageContainer />
      </NewsLayout>
    </PageContextProvider>
  );
}

export default App;
