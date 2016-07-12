import dispatcher from '../dispatcher' 

export function loadText() {
    dispatcher.dispatch({
        type: 'LOAD_START'
    }) 

    let promise = fetch('demo.html')
        .then(function(response) { 
			return response.text(); 
        }).then(function(text){
						
			let data = text
			
            dispatcher.dispatch({
                type: 'LOAD_END', 
                data

            })
		})
    }
