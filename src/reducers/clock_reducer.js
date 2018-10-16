import types from '../actions/types';

const DEFAULT_STATE = {
    //time: null
    time: new Date().toLocaleTimeString(),
    header: 'The Time is...'
};

function clockReducer(state = DEFAULT_STATE, action) {
    console.log('clock_reducer state is ', state);
    console.log('clock_reducer action is ', action);
    switch(action.type) {

        //case 'update_time': 
        case types.UPDATE_TIME:
            return { ...state,
                    time: action.currentTime };
            // return {...state, time: action.currentTime };
        default: 
            return state;
    }
}

export default clockReducer;

