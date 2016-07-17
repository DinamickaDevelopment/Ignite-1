import React from 'react'; 
import { Link } from 'react-router'  

// ������ ��������� ������ (store)
import TodoStore from '../stores/toDoStore'

// ������ React-�����������
import Table from './table' 
import List from './list'

// ������ ���� �������������� �������� �� toDoActions ��� ������ TodoActins
import * as TodoActions from '../actions/toDoActions'

export default class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            tasks: TodoStore.getAll(), 
            tableMode: TodoStore.getMode()
        } 
        this.changeMode =  this.changeMode.bind(this)
        this.changeHandler = this.changeHandler.bind(this) 
    } 

    changeHandler() {
        // �������� �������� changeMode, ������� ��������� ������� changeMode
        TodoActions.changeMode(); 
    }

     changeMode() {
         this.setState({
        // �������� ������ �� ��������� TodoStore
            tableMode: TodoStore.tableMode
        })
    }
     componentWillMount() {
         // ���������� ����������� ������� changeMode TodoStore
        TodoStore.on("CHANGE_MODE", this.changeMode)
    }
     componentWillUnmount() {
         // �������� ����������� ������� changeMode TodoStore
        TodoStore.removeListener("CHANGE_MODE", this.changeMode); 
    }
    render() {
        return (<div className="panel">
            <div className="panel well">
                <h2>Tasks</h2>
            <label>Table mode &nbsp; <input type="checkbox" checked={this.state.tableMode} onChange={this.changeHandler}/></label>
            <div className="margin"><Link to="/edit"><button className="btn btn-sm btn-warning">Edit</button></Link></div>
            </div>
            {this.state.tableMode ? <Table showDetails={false} items={this.state.tasks}/> : <List showDetails={false} items={this.state.tasks}/>}    
        </div>
    )}
}
