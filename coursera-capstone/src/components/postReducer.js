export const INITIAL_STATE = {
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    inlineRadioOptions: "",
    date: "",
    Time: "",
    guests: "",
    occassion: ""
};

export const postReducer = (state, action) => {
    switch (action.type){
        case "CHANGE_INPUT":
            return{
                ...state,
                [action.payload.name]:action.payload.value
            };
        default:
            return state;
    }
}