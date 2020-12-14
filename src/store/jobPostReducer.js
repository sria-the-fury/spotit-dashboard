import {toast} from "react-toastify";

export const jobPostReducer = (state ={}, action) => {
    switch(action.type){
        case "JOB_POST":
            toast.success('Job Posted 😃');
            return state;
        case "JOB_POST_ERROR":
            toast.warn(action.jobPostError.message);
            return state;

        case "REMOVE_POSTED_JOB":
            toast.error("Job Deleted 😑");
            return state;

        case "REMOVE_POSTED_JOB_ERROR":
            toast.warn(action.removePostJobError.message);
            return state;

        default:
            return state;

    }
}