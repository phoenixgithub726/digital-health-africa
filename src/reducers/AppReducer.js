// import uuid from 'uuid/v1'

export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'SelectList':
            return action.selectNum
        // case 'REMOVE_BOOK': 
        //     return state.filter(book => book.id !== action.id)
        // default:
        //     return state
    }
}