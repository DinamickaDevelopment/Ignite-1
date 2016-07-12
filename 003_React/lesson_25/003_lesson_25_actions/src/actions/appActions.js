import dispatcher from '../dispatcher' 

export function count() {
    dispatcher.dispatch({
        type: 'COUNT'
    })
} 

export function changeStyle() {
    dispatcher.dispatch({
        type: 'CHANGE_STYLE'
    })
} 

// �������� ��������� �� view � actions 
export function showText(text) {
    dispatcher.dispatch({
        type: 'SHOW_TEXT', 
        text
    })
}