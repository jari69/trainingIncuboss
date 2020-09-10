import * as ActionTypes from '../../redux/ActionTypes';
import * as ActionCreators from '../../redux/ActionCreators';

test('setName should create an action to set the name', () => {

    const name= ""
    const expectedAction = {
        type: ActionTypes.SET_NAME,
        payload: name
    }
    expect(ActionCreators.setName()).toEqual(expectedAction)
})

test('editName should create an action to edit the name', () => {

    const name= "jari"
    const expectedAction = {
        type: ActionTypes.EDIT_NAME,
        payload: name
    }
    expect(ActionCreators.editName("jari")).toEqual(expectedAction)
})