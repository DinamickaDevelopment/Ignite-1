import React from 'react'
import ReactDOM from 'react-dom'

import appStore from '../Stores/appStore'
import * as appActions from '../Actions/appActions'


export default class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            text: 'no text...'
        }

        this.clickHandler = this.clickHandler.bind(this); 
    } 
    
    clickHandler() {
        appActions.loadText(); 
    }

    componentWillMount() {
        appStore.on('loadStart', () => {
            this.setState({ text: 'loading...' })
        }) 
        appStore.on('loadEnd', () => {
            this.setState({ text: appStore.getText() })
        })
    }


    render() {
        return (
            <div className="panel well">
                <button className="btn-lg btn-warning btn" onClick={this.clickHandler}>Show text</button>
                <h2>{this.state.text}</h2>
            </div>
    )}
}
