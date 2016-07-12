import dispatcher from '../dispatcher' 

export function loadText() {
    dispatcher.dispatch({
        type: 'LOAD_START'
    }) 

    let promise = fetch('demo.html')
        .then(function(response) { 
            response = Promise.resolve(response); 
            let data = 'Text loaded asynchronously!'; 

            dispatcher.dispatch({
                type: 'LOAD_END', 
                data

            })
      
        })
    }
