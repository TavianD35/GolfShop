export interface CounterState {
    data: number;
    title: string;
}

const intialState: CounterState = {
    data: 42, 
    title: 'YARC (yet another redux counter)'
}

export default function counterReducer(state = intialState, action: any) {
    return state;
}