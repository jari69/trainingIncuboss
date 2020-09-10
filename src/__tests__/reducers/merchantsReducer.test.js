import * as ActionTypes from '../../redux/ActionTypes';
import { Merchants } from '../../redux/merchantsReducer';
import { MERCHANTS } from '../../shared/merchants';

// test('initial state should be undefined', () => {
//     const state = Merchants({},{});

//     console.log(state)
//     expect(state).toEqual({});
// })

// or

let state = beforeEach(() => {
    state = Merchants({},{});
})

test('initial state should be undefined', () => {
    // const state = Merchants({},{});

    // console.log(state)
    expect(state).toEqual({});
})

var action = {
    type: ActionTypes.EDIT_MERCHANTS,
    payload: MERCHANTS,
    id:1
}

// let state1 = beforeEach(() => {
//     state1 = Merchants(MERCHANTS,action);
// })

test('should expect a changed status for clyde', () => {

    expect(Merchants(MERCHANTS,action)[1].status).toBeTruthy();
})



