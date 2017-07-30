import axios from 'axios';

export function fetchUser(id) {
    let url = 'http://jsonplaceholder.typicode.com/users/' + id;
    return {
        type: 'FETCH_USER',
        payload: axios.get(url)
    }
}

// export function fetchUserPosts(id) {
//     return posts.filter((post) => {
//         return (post.userId === id)
//     })
// }
//
// export function fetchUserComments(id) {
//
// }