import dispatcher from '../dispatcher'; 

// ������� ������� 
export function createItem(item) {
    dispatcher.dispatch({
        type: 'createItem', 
        item
    })
}

// ������� �������
export function removeItem(id) {
    dispatcher.dispatch({
        type: 'removeItem', 
        id
    })
} 

// ����������� ����� ����������� ������ (������� ��� ������)
export function changeMode() {
    dispatcher.dispatch({
        type: 'changeMode'
    })
}  

// ������������� ������� 
export function editStart(id) {
    dispatcher.dispatch({
        type: 'editStart', 
        id
    })
} 

export function editEnd(item) {
    dispatcher.dispatch({
        type: 'editEnd', 
        item
      })
}
