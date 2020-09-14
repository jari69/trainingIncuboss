import thunk from 'redux-thunk';
import { fetchMerchants, fetchState, fetchName } from '../../redux/ActionCreators';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import * as ActionCreators from '../../redux/ActionCreators';
import * as ActionTypes from '../../redux/ActionTypes';
import { MERCHANTS } from '../../shared/merchants';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

  it('should dispatch actions of ConstantA and ConstantB', () => {
    const expectedActions = [
      {type: ActionTypes.SET_MERCHANTS, payload: {}}
    ]

    const store = mockStore({ })
    store.dispatch(fetchMerchants())

    expect(store.getActions()).toEqual(expectedActions)
  })
})