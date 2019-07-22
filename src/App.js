import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { fetchCollectionsStartAsync } from './redux/articles/articles.actions';

import Header from './components/header/header.component';
import LandingPage from './pages/landing-page/landing-page.component';
import AboutPage from './pages/about-page/about-page.component';
import ArticlePage from './pages/article-page/article-page.component';

import './App.css';

class App extends React.Component {

  componentDidMount(){
    const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
  }

  render(){
    return(
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/article/:id' component={ArticlePage} />
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(App);
