import { createStore } from 'vuex'

const state = {
    currentPage: 'IntroPage',
    characterSelected: ''
}

const mutations = {
    characterSelected(state, name){
        state.characterSelected = name;
        state.currentPage = 'CharacterPage';

        console.log(state.characterSelected)
    }
}

export default createStore({
    state,
    mutations
})