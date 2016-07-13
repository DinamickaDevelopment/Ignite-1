// reducer �� ������ ���������� undefined ��� �������������, ������� ������� ��������� �� ��������� 
const msgReducer = (state=['Hello world'], action) => {
    switch(action.type) {
        case 'NEW_MSG': {
            state = [...state, action.payload]
            break; 
        }
    }
    return state
} 

export default msgReducer; 