
export const addCharacterReducer = (state= {}, action) => {
    switch (action.type) {
        case "ADD_CHAR_ITEM":
            return {
                ...state,
                charName: action.value1,
                charEmail: action.value2,
                charGender: action.value3,
                charImage: action.value4,
            }

        case "RESET_CHAR_STATE":
            return {
                [action.value]:[{...state}],
            }

        default:
            return state;
    }
};