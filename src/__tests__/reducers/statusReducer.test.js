import * as ActionTypes from '../../redux/ActionTypes';
import { Status } from '../../redux/StatusReducer';

//original state
let state = beforeEach(() => {
    state = Status({},{});
})

test('should set the status to true', () => {

    expect(state).toBeTruthy();
})

//false or inactive is passed
var action = {
    type: ActionTypes.EDIT_STATUS,
    payload: false
}

test('should set the value to false', () => {

    expect(Status({},action).status).toBeFalsy();
})

//true or active is passed
var action1 = {
    type: ActionTypes.EDIT_STATUS,
    payload: true
}

test('should set the value to true', () => {

    expect(Status({},action1).status).toBeTruthy();
})


