import React from 'react'; 
import { withRouter } from 'react-router'; 

export const View2 = withRouter(class View2 extends React.Component {

    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    } 
    render() {
        return(
                <h3>This is view 2!</h3>
      )}
}) 
