import { createStore } from 'vuex'


const state = {
    currentPage: 'IntroPage',
    characterSelected: '',
    baseStats: ''
}

const mutations = {
    characterSelected(state, name){
        state.characterSelected = name;

    },
    changePage(state, page){
        state.currentPage = page;
    },
    changeCharacterStats(state, charJsonFile){
        state.baseStats = charJsonFile;
    }

}

export default createStore({
    state,
    mutations
})