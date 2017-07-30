import * as User from '../constants/userConst';

export function userReducer(state = {user: [], is_fetching: false}, action) {
    switch (action.type){
        case User.FETCH_USER_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }
        case User.FETCH_USER_FULFILLED: {
            state = {...state, is_fetching: false, user: action.payload.data};
            break;
        }

        case User.FETCH_USER_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
    }

    return state;
}