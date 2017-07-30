import * as Comments from '../constants/commentsConst';

export function commentsReducer(state = {comments: [], is_fetching: false}, action) {
    switch (action.type){
        case Comments.FETCH_COMMENTS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }
        case Comments.FETCH_COMMENTS_FULFILLED: {
            state = {...state, is_fetching: false, comments: action.payload.data};
            break;
        }

        case Comments.FETCH_COMMENTS_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
        // case Comments.ADD_COMMENT: {
        //     state = {...state, is_fetching: false, comments: comments.push(action.data)};
        //     break;
        // }
    }

    return state;
}