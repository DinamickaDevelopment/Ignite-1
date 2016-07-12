import React from 'react'
import ReactDOM from 'react-dom'

import appStore from '../Stores/appStore'
import * as appActions from '../Actions/appActions' 

import List from './list'


export default class App extends React.Component{
    constructor() {
        super() 
        
        this.state = {
            items: appStore.getAll()
        }

        this.clickHandler = this.clickHandler.bind(this); 
        this.removeItemHandler =  this.removeItemHandler.bind(this); 
    } 
    
    clickHandler() {
        // ������� ����� ������ item 
        var newItem = {
            name: document.getElementById('input').value, 
            id: `${Date.now()}`
        } 

        // �������� ��� actions � �������� ��������� 
        appActions.createItem(newItem); 
    }

    componentWillMount() { 
        // �������� view ��� �������� ��� ���������� �������� 
        appStore.on('change', () => {
            this.setState({ items: appStore.getAll() })
        }) 
    } 

    removeItemHandler(e) {
        appActions.removeItem(e.target.dataset.id)
    }


    render() { 

        var boundHandler = this.removeItemHandler.bind(this); 
        return (
            <div className="panel well">
            <div className="input-group">
                <label> Item name </label>
                    <input id="input" type="text" className="form-control input-md"/>  
                   <span className="input-group-btn"> <button className="btn-md btn-warning btn" onClick={this.clickHandler}>Add item!</button> </span>
  
            </div>
                  {/*�������� ���������� ��������� ����������*/}
                  <List items={this.state.items} handler={boundHandler}/>
            </div>
    )}
}
