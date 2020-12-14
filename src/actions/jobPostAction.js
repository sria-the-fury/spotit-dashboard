export const addJobPost = (formsInfo, jobType) =>{
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();

        firestore.collection("jobs")
            .add({
                ...formsInfo,
                jobType: jobType,
                deadLine: new Date(formsInfo.deadLine),
                date: new Date()
            })
            .then(() => {
                dispatch({
                    type: "JOB_POST",
                    formsInfo, jobType
                });
            }).catch(jobPostError => {
                dispatch({
                    type: "JOB_POST_ERROR",
                    jobPostError
                })

        });

    }
};


export const removePostedJob = jobID => {
    return ( dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        firestore.collection("jobs").doc(jobID)
            .delete().then(() => {
            dispatch({
                type: "REMOVE_POSTED_JOB",
            });
        }).catch( removePostJobError => {
            dispatch({
                type: "REMOVE_POSTED_JOB_ERROR",
                removePostJobError
            });
        });
    };
};