import React from 'react';

const JobDetails = (props) => {
    console.log("props=>",props);
    const {match} = props;
    const {jobType, id} = match.params;
    console.log("jobType=>",jobType);
    console.log("id=>",id);
    return (
        <div className='container' style={{marginTop: '5em'}}>
            <div className='posted-job-details'>

            </div>

        </div>
    );
}

export default JobDetails;