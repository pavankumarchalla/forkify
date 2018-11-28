import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView'
import { elements, renderLoader, clearLoader } from './views/base';

const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();

    if (query) {
        state.search = new Search(query);

        searchView.clearInput();

        searchView.clearResults();

        renderLoader(elements.searchRes);

        try {
            await state.search.getResults();
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            clearLoader();
            alert('Something went wrong!!!');
        }

    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const gotoPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, gotoPage);
    }
});


//RECIPE 

const controlRecipe = async () => {
    const id = window.location.hash.replace('#','')
    console.log(id);

    if (id) {
       
        state.recipe = new Recipe(id);
       
        try {
            await state.recipe.getRecipe();
       
            state.recipe.calcTime();
           
            state.recipe.calcServings();
    
            console.log(state.recipe);
        } catch (error) {
            alert('Error Processing Recipe!');
        }

    }

}


window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);
