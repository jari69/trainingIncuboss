import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Merchants } from './merchantsReducer';
import { Name } from './nameReducer';
import { Status } from './statusReducer';

export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            merchants: Merchants,
            name: Name,
            status: Status
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}