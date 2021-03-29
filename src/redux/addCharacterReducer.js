
export const addCharacterReducer = (state= {
    1: 'qwerty',
    2: 'asdfg',
}, action) => {
    switch (action.type) {
        case "ADD_SOME_INFO":
            return {
                ...state,
                [action.firstValue]: action.secondValue,
            }
    
        default:
            return state;
    }
};