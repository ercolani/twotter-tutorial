import { createStore } from 'vuex'
import { UserModule } from "./User";

export default createStore({
    state:{
    },

    // affect the STATE
    mutations:{
    },
    
    // function that you call throught your app that call mutations
    actions: {
    },

    modules: {
        User: UserModule
    }
})