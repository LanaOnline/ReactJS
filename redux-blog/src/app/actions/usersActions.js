import axios from 'axios';

export function fetchUsers() {
    let url = 'http://jsonplaceholder.typicode.com/users';
    return {
        type: 'FETCH_USERS',
        payload: axios.get(url)
    }
}