// import { PURGE, REHYDRATE } from 'redux-persist';

// export default function RemovePersistReducer(state = {}, action) { 
//     switch(action.type) { 
//         case REHYDRATE:
//             console.log("REHYDRATING!!!!");    
//             return state;
//         case PURGE: 
//             console.log("PURGING!!!!"); 
//             return {};
//         default:
//             return state  
//     }
// }
import { 
    REMOVE_PERSIST
} from "../actionTypes";
import storage from 'redux-persist/lib/storage';

export default (state = {}, action) => {
    switch (action.type) {
        case REMOVE_PERSIST:
            console.log('hell')
            storage.removeItem('persist:root')
            return state
        default:
            return state;
    }
};
