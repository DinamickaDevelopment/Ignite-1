import React from 'react'
import ReactDOM from 'react-dom'

import appStore from '../Stores/appStore'
import * as appActions from '../Actions/appActions' 

export default class List extends React.Component{
    constructor(props) {
        super(props)
    } 

    render() {
        return(
                <ul>
                    {this.props.items.map((item) => {
                        {/* ��������� ������� li �������������� ���� */}
                        return (
                            <li key={item.id}>{item.name} &nbsp; 
                            <span 
                                data-id={item.id} 
                                onClick={this.props.handler} className="glyphicon glyphicon-remove">
                            </span>
                            </li>
                        )
                    })}
                </ul>
     )}
}