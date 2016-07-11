import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { withRouter } from 'react-router'; 

export const View2 = withRouter(class View2 extends React.Component {

    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    } 

    routerWillLeave(nextLocation) {
        // ���� ������� false, ������� �� ������ ����� �������

        // �������� ������������ ��������� 
            return 'Are you sure you want to leave?'
    }
    
    render() {
        return(
                <h3>This is view 2!</h3>
      )}
}) 
