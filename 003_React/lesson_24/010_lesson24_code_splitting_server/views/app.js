import React from "react"
import ReactDOM from 'react-dom' 
import { Link } from 'react-router'

export default class App extends React.Component {
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

