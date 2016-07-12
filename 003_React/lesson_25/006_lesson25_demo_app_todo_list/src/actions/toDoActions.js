import dispatcher from '../dispatcher'; 

// создать элемент 
export function createItem(item) {
    dispatcher.dispatch({
        type: 'createItem', 
        item
    })
}

// удалить элемент
export function removeItem(id) {
    dispatcher.dispatch({
        type: 'removeItem', 
        id
    })
} 

// переключить режим отображения данных (таблица или список)
export function changeMode() {
    dispatcher.dispatch({
        type: 'changeMode'
    })
}  

// редактировать элемент 
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
