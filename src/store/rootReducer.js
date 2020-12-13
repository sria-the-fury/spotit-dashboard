import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import {jobPostReducer} from "./jobPostReducer";


const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    jobPostReducer: jobPostReducer

});

export default rootReducer;