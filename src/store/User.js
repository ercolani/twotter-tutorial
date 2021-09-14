export const UserModule = {
    namespaced: true,
    
        state:{
        user: null
    },

    // affect the STATE
    mutations:{
        SET_USER(state, user) {
            state.user = user;
        }
    },
    
    // function that you call throught your app that call mutations
    actions: {
        setUser({ commit }, user){
            commit('SET_USER', user);
        }
    }
}