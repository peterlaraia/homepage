import { createStore, combineReducers } from 'redux';

import { reducer as sidebarReducer } from '../sidebar/store/reducer';

export const store = createStore(
    combineReducers({
        sidebar: sidebarReducer
    })
);