import React, {Fragment, useEffect} from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { fetchCollectionsStartAsync } from './redux/articles/articles.actions';

import Header from './components/header/header.component';
import LandingPage from './pages/landing-page/landing-page.component';
import AboutPage from './pages/about-page/about-page.component';
import ArticlePage from './pages/article-page/article-page.component';
import PostPage from './pages/post-page/post-page.component';
import MapPage from './pages/map-page/map-page.component';

import './App.css';

const App = ({fetchCollectionsStartAsync}) => {

  useEffect(()=>{
    fetchCollectionsStartAsync()
  }, [fetchCollectionsStartAsync]);

  return(
    <div className="App">
      <Switch>
        <Route exact path='/map' component={MapPage} />
        <Fragment>
          <Header />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/article/:id' component={ArticlePage} />
          <Route exact path='/post' component={PostPage} />
        </Fragment>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(App);
