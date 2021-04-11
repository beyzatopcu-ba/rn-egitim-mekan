// Initial State
const INITIAL_STATE = {
    noteList: [],
};

// Selectors
export const noteListSelector = state => state.notes.noteList;

// Action Types
const ADD_NOTE = "notes/add_note";

// Action Creators
export const addNoteAC = (note) => {
    return {
        type: ADD_NOTE,
        payload: { note },
    };
}

// Reducer
export const noteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NOTE:
            const noteList = state.noteList;
            let copyNoteList = [...noteList];
            const note = action.payload.note;
            copyNoteList.push(note);

            return {
                noteList: copyNoteList,
            };

        default:
            return state;
    }
};