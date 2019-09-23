import { CHANGE_VALUE } from './types'

export const changeValue = payload => dispatch => {
    dispatch({
        type: CHANGE_VALUE,
        payload: payload
    })
} 