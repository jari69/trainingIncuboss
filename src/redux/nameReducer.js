import * as ActionTypes from './ActionTypes';

export const Name = (state= {name:""}, action) => {
    switch (action.type) {
        case ActionTypes.SET_NAME:
            return {...state, name: action.payload};

        case ActionTypes.EDIT_NAME:
            return {...state, name: action.payload};

        default:
            return state;
    }
};