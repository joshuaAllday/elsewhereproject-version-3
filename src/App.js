import React, {Fragment, useEffect, lazy, Suspense} from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { fetchCollectionsStartAsync } from './redux/articles/articles.actions';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import PrivateRoute from './components/private-route/private-route.component';
import EditPage from './pages/edit-page/edit-page.component';

import './App.css';

const LandingPage = lazy(() => import('./pages/landing-page/landing-page.component'));
const AboutPage = lazy(() => import('./pages/about-page/about-page.component'));
const ArticlePage = lazy(() => import('./pages/article-page/article-page.component'));
const PostPage = lazy(() => import('./pages/post-page/post-page.component'));
const MapPage = lazy(() => import('./pages/map-page/map-page.component'));
const LoginPage = lazy(() => import('./pages/login/login.component'));

const App = ({fetchCollectionsStartAsync}) => {

  useEffect(()=>{
    fetchCollectionsStartAsync()
  }, [fetchCollectionsStartAsync]);

  return(
    <div className="App">
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/map' component={MapPage} />
          <Fragment>
            <Header />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/article/:id' component={ArticlePage} />
            <Route exact path='/post' component={PostPage} />
            <Route exact path='/admin-sign-in' component={LoginPage} />
            <PrivateRoute isAuth={false} path='/edit-articles' component={EditPage}/>
          </Fragment>
        </Suspense>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(App);
