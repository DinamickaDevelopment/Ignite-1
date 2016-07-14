import React from 'react';   

// ������ ���� �������������� �������� �� toDoActions ��� ������ TodoActins
import * as TodoActions from '../actions/toDoActions'

export default class List extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return(
            <ul>
                {this.props.items.map((item) => {
                    return <li key={item.id}>{item.name} &nbsp; 
                        <div className={this.props.showDetails ? 'show' : 'hide'}>
                           <span className="glyphicon glyphicon-remove" data-id={item.id} onClick={this.props.removeHandler}></span>
                            <span className="glyphicon glyphicon-pencil" data-id={item.id} onClick={this.props.clickHandler}></span>
                       </div>
                        </li>
                 
                })}
           </ul>        
    )}
}
