import axios from 'axios';

export function fetchPost(id) {
    let url = 'http://jsonplaceholder.typicode.com/posts/' + id;
    return {
        type: 'FETCH_POST',
        payload: axios.get(url)
    }
}