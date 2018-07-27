import React from 'react';
import { Link } from 'react-router'; 

class Home extends React.Component {
    render () {
        return (
            <div className="jumbotron">
              <h1>Kuee Ltd React Scaffold App</h1>
              <p>Basic Starter Project - Linting, tests, webpack, babel, hot reloading etc.</p>
              <Link to="about" className="btn btn-primary btn-lg">Learn</Link>
            </div>
        );
    }
}

export default Home;