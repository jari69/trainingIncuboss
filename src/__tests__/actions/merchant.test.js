import * as ActionTypes from '../../redux/ActionTypes';
import * as ActionCreators from '../../redux/ActionCreators';
import { MERCHANTS } from '../../shared/merchants';

test('setMerchant should create an action to set the merchant', () => {

    const merchants = MERCHANTS
    const expectedAction = {
        type: ActionTypes.SET_MERCHANTS,
        payload: merchants
    }
    expect(ActionCreators.setMerchants(MERCHANTS)).toEqual(expectedAction)
})

test('editMerchant should create an action to edit the merchant', () => {

    const id = 11;
    const merchants = MERCHANTS;

    const expectedAction = {
        type: ActionTypes.EDIT_MERCHANTS,
        payload: merchants,
        id: id
    }
    expect(ActionCreators.editMerchants(id,MERCHANTS)).toEqual(expectedAction)
})


// test('filterMerchant should create an action to filter the merchant', () => {

//     const merchants = MERCHANTS;
//     const name = "clyde";
//     const expectedAction = {
//         type: ActionTypes.FILTER_MERCHANTS,
//         merchants: merchants,
//         name: name

//     }
//     expect(ActionCreators.filterMerchants(name,MERCHANTS)).toEqual(expectedAction)
// })