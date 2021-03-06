import React, {lazy, Suspense, useEffect} from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/users/users.selectors';
import { fetchCollectionsStartAsync } from './redux/articles/articles.actions';

import LogoContainer from './components/logo/logo.component';
import Spinner from './components/spinner/spinner.component';
import PrivateRoute from './components/private-route/private-route.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import './App.css';

const LandingPage = lazy(() => import('./pages/landing-page/landing-page.component'));
const AboutPage = lazy(() => import('./pages/about-page/about-page.component'));
const PostPage = lazy(() => import('./pages/post-page/post-page.component'));
const MapPage = lazy(() => import('./pages/map-page/map-page.component'));
const LoginPage = lazy(() => import('./pages/login/login.component'));
const EditPage = lazy(() => import('./pages/edit-page/edit-page.component'));
const RegisterPage = lazy(() => import('./pages/register-page/register-page.component'));

const App = ({fetchCollectionsStartAsync, currentUser}) =>  {

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return(
    <div className="App">
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <LogoContainer />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/post' component={PostPage} />
            <Route exact path='/map' component={MapPage} />
            <Route
              exact
              path='/admin-sign-in'
              render={() =>
                currentUser ? <Redirect to='/edit-articles' /> : <LoginPage />
              }
            />
            <PrivateRoute isAuth={currentUser} path='/edit-articles' component={EditPage}/>
            <PrivateRoute isAuth={currentUser} path='/register-user' component={RegisterPage}/>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
