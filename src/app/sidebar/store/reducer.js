import * as sidebarActions from './actions';

const initialState = {
    show: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case sidebarActions.CLOSE: {
            return {
                show: false
            };
        }

        case sidebarActions.OPEN: {
            return {
                show: true
            };
        }

        case sidebarActions.TOGGLE: {
            return {
                show: !state.show
            };
        }

        default: {
            return state;
        }
    }
}
