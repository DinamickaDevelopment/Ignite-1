import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Router, Route, Link, IndexRoute, hashHistory, Redirect } from 'react-router'; 

import View from '../views/view'; 
import View1 from '../views/view1'; 
import View2 from '../views/view2'; 

import '../css/main.css'; 

class App extends React.Component {
    render() {
        return (
        <div>
            <div id="container" className="panel well">
                <h1>React Routing Demo!</h1>
                     <ul>
                          <li><Link to="/view1"><button className="btn btn-lg btn-success">View 1</button></Link></li>
                          <li><Link to="/view"><button className="btn btn-lg btn-success">View 2</button></Link></li>
                    </ul>
            </div>  
            <div className="panel">{this.props.children}</div>
        </div>
   )}
} 

class Home extends React.Component {
    render() {
        return (
            <h3>This is the homepage</h3>        
    )}
}



ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="view1" component={View1} />
        <Route component={View}>
			{/* ��������������� �� view � view 2 */}
             <Redirect from="view" to="view2" />
        </Route> 
        <Route path="view2" component={View2} />    
    </Route>
    </Router>, document.getElementById('app')); 
