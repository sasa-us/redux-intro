import types from './types';

export function tick(now) {
    return {
        // type: 'update_time',
        type: types.UPDATE_TIME,
        //currentTime: new Date().toLocaleTimeString()
        currentTime: now
    }
}