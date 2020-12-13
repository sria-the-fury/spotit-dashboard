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
            }).catch( jobPostError => {
                dispatch({
                    type: "JOB_POST_ERROR",
                    jobPostError
                })

        });

    }
}