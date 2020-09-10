import thunk from 'redux-thunk';
import { fetchMerchants, fetchState, fetchName } from '../../redux/ActionCreators';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import * as ActionTypes from '../../redux/ActionCreators';
import { MERCHANTS } from '../../shared/merchants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
let store;

beforeEach(() => {
    store = mockStore({ merchants: [] })
})

afterEach(() => {
    nock.cleanAll()
})

describe('fetching merchants', () => {
    test('dispatches SET MERCHANT when fetching succeeds',() => {
           
            // const userObj = { username, realname }

        nock('http://localhost:3000/')
        .get(`/data/merchants`)
        .reply(200, MERCHANTS)

        const expectedActions = [
            { type: ActionTypes.SET_MERCHANTS, payload: MERCHANTS }
        ]

        expect.assertions(1);

        return store.dispatch(fetchMerchants())
            .then(() =>
                expect(store.getActions()).toEqual(expectedActions)
            )
    });
});