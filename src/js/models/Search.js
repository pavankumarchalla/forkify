import axios from 'axios';
import {proxy, key} from '../config'

//3e85eb4d8acbfc7b3468010ceabfcbe6
//57087664a44a75006b80945cd6bc4da0

export default class Search {

    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}/https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            alert(error)
        }
    
    }
    
}