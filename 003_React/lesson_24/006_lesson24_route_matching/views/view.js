import React from 'react'; 
import ReactDOM from 'react-dom'; 

export default class View extends React.Component {
    render() {
        return ( 
            <div className="panel test">{this.props.children}</div>
        )}
}