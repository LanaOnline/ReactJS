import axios from 'axios';

export function fetchComments() {
    let url = 'http://jsonplaceholder.typicode.com/comments';
    return {
        type: 'FETCH_COMMENTS',
        payload: axios.get(url)
    }
}