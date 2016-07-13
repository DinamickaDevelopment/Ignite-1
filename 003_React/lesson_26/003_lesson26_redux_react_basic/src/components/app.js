import React from 'react' 
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import * as actions from '../actions/actions'

class App extends React.Component {
    render() {
    return (
            <div className="panell well">
                <button className="btn-md btn btn-warning"
                onClick={() => this.props.greet()}>Click Me!</button>
                <h1>{this.props.text}</h1>
            </div>
        )
    }
} 

// �������� state � ���������� App
function mapStateToProps(state) {
    console.log(state.demo)
    return {
        text: state.demo
    }
} 

// �������� actions � ���������� App
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        greet: actions.showText
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App) 