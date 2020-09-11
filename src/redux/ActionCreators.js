import * as ActionTypes from './ActionTypes';
// import { MERCHANTS } from '../shared/merchants';
import axios from 'axios';

// export const setMerchants = (status,name) => ({
//     type: ActionTypes.SET_MERCHANTS,
//     payload: {
//         status: status,
//         name: name
//     }
// });

// const merchantsArray=[];


// axios.get('./data/data.json')
// .then((res)=>{
//     const merchants = res.data.merchants;
//     // Array.prototype.push.apply(merchantsArray, merchants);
//     //FIX THIS!
//     merchantsArray.push(...merchants);
// }).catch((err)=>{
//     console.log(err);
// })

export const fetchMerchants = () => async (dispatch) => {

    // console.log(merchantsArray);

    // axios.get('./data/data.json')
    //     .then((res)=>{
    //         const merchants = res.data.merchants;
    //         // Array.prototype.push.apply(merchantsArray, merchants);
    //         //FIX THIS!
    //         // merchantsArray.push(...merchants);
    //         console.log(merchants);
    //         dispatch(setMerchants(merchants));

    //     }).catch((err)=>{
    //         console.log(err);
    //     })

    const merchants =  await axios.get('./data/data.json').then(function (response) {
        // console.log(response);
        return response;
    });
    
    dispatch(setMerchants((await merchants).data.merchants));

    // dispatch(setMerchants(MERCHANTS));

}

export const fetchState = () => (dispatch) => {
    // dispatch(dishesLoading(true));
    // console.log(merchants);
    dispatch(setStatus());
}

export const fetchName = () => (dispatch) => {
    dispatch(setName());
}

export const setMerchants = (merchants) => ({
    type: ActionTypes.SET_MERCHANTS,
    payload: merchants
});

export const setMerchant = (searchNames) => ({
    type: ActionTypes.SET_MERCHANT,
    payload: searchNames
});

export const editMerchants = (id,merchants) => ({
    type: ActionTypes.EDIT_MERCHANTS,
    payload: merchants,
    id: id
});

export const setStatus = () => ({
    type: ActionTypes.SET_STATUS,
    payload: true
});

export const editStatus = (status) => ({
    type: ActionTypes.EDIT_STATUS,
    payload: status
});

export const setName = () => ({
    type: ActionTypes.SET_NAME,
    payload: ""
});

export const editName = (name) => ({
    type: ActionTypes.EDIT_NAME,
    payload: name
});

