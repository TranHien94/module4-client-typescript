import { useReducer} from 'react'

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

//useReducer Strict Action Type
type CountAction = UpdateAction | ResetAction
//initState
const initialState = { count: 0}

//Reducer
function reducer(state: CounterState, action: CountAction) {
    switch(action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return {...state, count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment 10</button>
            <button  onClick={() => dispatch({type: 'decrement', payload: 10})}>Decrement 10</button>
            <button  onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </>
    )
}