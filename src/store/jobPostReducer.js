import {toast} from "react-toastify";

export const jobPostReducer = (state ={}, action) => {
    switch(action.type){
        case "JOB_POST":
            toast.success('Job Posted 😃');
            return state;
        case "JOB_POST_ERROR":
            toast.error(action.jobPostError.message);
            return state;
        default:
            return state;

    }
}