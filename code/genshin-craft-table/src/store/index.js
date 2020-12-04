import { createStore } from 'vuex'


const state = {
    currentPage: 'IntroPage',
    characterSelected: '',
    characterIcon: '',
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
    },
    changeCharacterIcon(state, icon){
        state.characterIcon = icon;
    }

}

export default createStore({
    state,
    mutations
})