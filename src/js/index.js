//57087664a44a75006b80945cd6bc4da0

//https://www.food2fork.com/api/search

import axios from 'axios';

async function getResults(query) {
    try {
        const key = '57087664a44a75006b80945cd6bc4da0';
        const result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = result.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }

}

getResults('pizza');