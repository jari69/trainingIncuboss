import * as ActionTypes from './ActionTypes';

export const Status = (state= {status:true}, action) => {

    switch (action.type) {
        case ActionTypes.SET_STATUS:
            return {...state, status: action.payload};

        case ActionTypes.EDIT_STATUS:
            return {...state, status: action.payload};

        default:
            return state;
    }
};