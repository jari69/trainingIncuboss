import * as ActionTypes from '../../redux/ActionTypes';
// import * as ActionCreators from '../../redux/ActionCreators';
import { Name } from '../../redux/NameReducer';

let state = beforeEach(() => {
    state = Name({},{});
})

test('should output null when no name is given', () => {

    expect(state.name).toBeUndefined();
})

let state1 = beforeEach(() => {
    state1 = Name({},{type: ActionTypes.SET_NAME,payload:"jari"});
})

test('should output name when name is given', () => {

    expect(state1.name).toBe("jari");
})

let state2 = beforeEach(() => {
    state2 = Name({},{type: ActionTypes.EDIT_NAME,payload:"clyde"});
})

test('should output name when name is given', () => {

    expect(state2.name).toBe("clyde");
})