import * as ActionTypes from './ActionTypes';

export const Merchants = (state= {merchants:[]}, action) => {
    switch (action.type) {
        case ActionTypes.SET_MERCHANTS:
            return {...state, merchants: action.payload};

        case ActionTypes.SET_MERCHANT:
            
            return {...state, merchants: action.payload};

        case ActionTypes.EDIT_MERCHANTS:
            const index = action.payload.findIndex((merchant) => merchant.id === action.id);
            const tempMerchants = [...action.payload];
            tempMerchants[index].status = !tempMerchants[index].status;
            return {...state, merchants: tempMerchants};

        default:
            return state;
    }
};

