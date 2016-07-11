import React from "react"
import ReactDOM from 'react-dom' 
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router' 
import '../css/main.css'
import Home from '../views/home'


class App extends React.Component {
    render() {
        return (
            <div>
                <div className="panel panel-primary well">
                    <h2>Code Splitting Demo!</h2>
                    <ul>
                          <li><Link to="/view1"><button className="btn btn-lg btn-success">View 1</button></Link></li>
                          <li><Link to="/view2"><button className="btn btn-lg btn-success">View 2</button></Link></li>
                    </ul>

                </div>
                <div className="panel output">
                    {this.props.children}    
                </div>
            </div>
    )}
}



ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route 
            path="view1"   
            getComponent={(location, callback) => {
                  require.ensure([], function (require) {
                      callback(null, require('../views/view1.js').default);
                  });
            }}
        />
        <Route 
            path="view2"
            getComponent={(location, callback) => {
                 require.ensure([], function (require) {
                     callback(null, require('../views/view2.js').default);
                 });
            }}   
    />
    </Route>
</Router>
, document.getElementById('app'))