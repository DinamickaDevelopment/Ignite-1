import React from 'react'   

import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'; 
import * as actions from '../actions/actions' 


class EditBar extends React.Component {
    
    constructor(props) {
        super(props) 

        this.clickHandler =  this.clickHandler.bind(this)
    } 

    clickHandler() { 

        var newUser = {
            id: `${Date.now}`,
            name: document.getElementById('input').value,  
            
            get gender() {
        
                switch (document.querySelector('input[name="gender"]:checked').value) {
                    case 'male': {
                        return 'male'
                        break;
                    }
                    case 'female': {
                        return 'female' 
                        break; 
                    } 
                    default: {
                        return 'not specified'
                    }
                }
            }
        } 

        console.log(this.props.createUser)

      }

    render() {
       
        return (

        <div className="form-group panel well">
           <div className="input-group">
                    <label> User name </label>
                    <input id="input" type="text" className="form-control input-md" placeholder="name"/>
                    <span className="input-group-btn"> 
                        <button className="btn-md btn-warning btn" onClick={this.clickHandler}>Add user!</button> 
                    </span> 

          </div>   
            
             <div className="form-group">
                    <label> Male &nbsp; <input type="radio" name="gender" value="male" /></label>
                    <label> Female &nbsp; <input type="radio" name="gender" value="female "/> </label>
              </div>
    </div>
    )}
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        createUser: actions.createUser
    }, dispatch)
} 

export default connect(matchDispatchToProps)(EditBar) 