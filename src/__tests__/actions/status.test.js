import * as ActionTypes from '../../redux/ActionTypes';
import * as ActionCreators from '../../redux/ActionCreators';

test('setStatus should create an action to set the status', () => {

    const expectedAction = {
        type: ActionTypes.SET_STATUS,
        payload: true
    }
    expect(ActionCreators.setStatus()).toEqual(expectedAction)
})

test('editStatus should create an action to edit the status', () => {

    const status = true;

    const expectedAction = {
        type: ActionTypes.EDIT_STATUS,
        payload: status
    }
    expect(ActionCreators.editStatus(status)).toEqual(expectedAction)
})

test('editStatus should create an action to edit the status', () => {

    const status = false;

    const expectedAction = {
        type: ActionTypes.EDIT_STATUS,
        payload: status
    }
    expect(ActionCreators.editStatus(status)).toEqual(expectedAction)
})

