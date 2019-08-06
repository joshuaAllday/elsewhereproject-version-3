import React, {Fragment, lazy, Suspense} from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/users/users.selectors';
import { fetchCollectionsStartAsync } from './redux/articles/articles.actions';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import PrivateRoute from './components/private-route/private-route.component';

import './App.css';


const LandingPage = lazy(() => import('./pages/landing-page/landing-page.component'));
const AboutPage = lazy(() => import('./pages/about-page/about-page.component'));
const ArticlePage = lazy(() => import('./pages/article-page/article-page.component'));
const PostPage = lazy(() => import('./pages/post-page/post-page.component'));
const MapPage = lazy(() => import('./pages/map-page/map-page.component'));
const LoginPage = lazy(() => import('./pages/login/login.component'));
const EditPage = lazy(() => import('./pages/edit-page/edit-page.component'));
const RegisterPage = lazy(() => import('./pages/register-page/register-page.component'));

class App extends React.Component {

  componentDidMount(){
    this.props.fetchCollectionsStartAsync();
  }

  render(){
    const { currentUser } = this.props;
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
              <Route
                exact
                path='/admin-sign-in'
                render={() =>
                  currentUser ? <Redirect to='/edit-articles' /> : <LoginPage />
                }
              />
              <PrivateRoute isAuth={currentUser} path='/edit-articles' component={EditPage}/>
              <PrivateRoute isAuth={currentUser} path='/register-user' component={RegisterPage}/>
            </Fragment>
          </Suspense>
        </Switch>
      </div>
    );
  };
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
