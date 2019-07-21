import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing-page/landing-page.component';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      articles: []
    }
  }

  componentDidMount(){
    fetch('https://dry-fjord-50481.herokuapp.com/articles')
		.then(response => response.json())
		.then(data => 
			this.setState({
				articles: data
			})
    )
  }

  render(){
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </div>
    );
  }
};

export default App;
