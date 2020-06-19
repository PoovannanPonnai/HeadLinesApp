import React from 'react';
import { shallow } from 'enzyme';

import ArticlePage from '../ArticlePage';
import ArticleList from '../ArticleList';
import ArticlePaginator from '../ArticlePaginator';
import ArticleNotFound from '../ArticleNotFound';
import Loader from '../Loader';
import ErrorPage from '../ErrorPage';

describe('<Article Page />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ArticlePage />);
  });

  it('Should render Loader', () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it('Should render Error', () => {
    wrapper.setProps({ error: 'Error' });
    expect(wrapper.find(ErrorPage)).toHaveLength(1);
  });

  it('Should render ArticleList', () => {
    wrapper.setProps({ data: { totalResults: 10 } });
    expect(wrapper.find(ArticleList)).toHaveLength(1);
  });

  it('Should render Article not found', () => {
    wrapper.setProps({ data: { totalResults: 0 } });
    expect(wrapper.find(ArticleNotFound)).toHaveLength(1);
  });

  it('Should render ArticleList with pagination', () => {
    wrapper.setProps({ data: { pageNavigation: true } });
    expect(wrapper.find(ArticlePaginator)).toHaveLength(1);
  });

  it('Should render ArticleList without pagination', () => {
    wrapper.setProps({ data: { pageNavigation: false } });
    expect(wrapper.find(ArticlePaginator)).toHaveLength(0);
  });
});
