import React from 'react' 
import './css/main.css' 

import { bindActionCreators } from 'redux' 
import { connect } from 'react-redux'

import ItemTable from './itemTable' 
import EditBar from '../containers/editBar'
import * as actions from '../actions/actions'  

import { Link } from 'react-router'

class App extends React.Component {
    constructor() {
        super()
        this.clickHandler =  this.clickHandler.bind(this)
    } 

    clickHandler(e) { 
        this.props.deleteUser(e.target.dataset.id); 

    }


    render() {

      let boundHandler = this.clickHandler.bind(this);
     
      return(    
       <div>
            <div className="panel well"> 
             <Link to="/feedback"><button className="btn btn-sm btn-warning">To feedback page</button></Link>
                <h2>Users List</h2>
           </div>
           <ItemTable items={this.props.users} handler={boundHandler}/>
           <EditBar />
       </div>    
    )
  }
} 

function mapStateToProps(state) {
    console.log(state.users)
    return {
        users: state.users
    }
}  

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteUser: actions.deleteUser
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)