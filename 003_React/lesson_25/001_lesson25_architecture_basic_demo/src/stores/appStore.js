import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter {
    constructor() {
        super() 
        this.initialCount = 0
        this.count = 0
    } 

    getInitialCount() {
        return this.initialCount
    }

    countClicks() {

        this.count++ 
        return this.count
    } 

    handleActions(action) {
        switch (action.type) {
            case "COUNT": { 
                this.emit('countChange')
                console.log(this.count); 
				break; 
            }
        }
    } 

   
} 

const appStore = new AppStore; 
dispatcher.register(appStore.handleActions.bind(appStore)); 

export default appStore; 