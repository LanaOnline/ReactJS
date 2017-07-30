import axios from 'axios';

export function fetchPosts() {
    let url = 'http://jsonplaceholder.typicode.com/posts';
    return {
        type: 'FETCH_POSTS',
        payload: axios.get(url)
    }
}