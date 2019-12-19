import {INIT,CHANGE_INPUT_VALUE} from "./constants";

const defaultState = {
    zip: "",
    year: "",
    predominant: "",
    list: []
};


export default (state = defaultState, action) => {
    if (action.type===INIT) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    if (action.type===CHANGE_INPUT_VALUE) {

        const newState = JSON.parse(JSON.stringify(state));
        console.log(newState);
        newState[action.id] = action.value;
        console.log(newState);

        return newState;
    }

    return state;
}
