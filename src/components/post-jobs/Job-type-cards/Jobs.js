import React from 'react';
import PostedJobCards from "./PostedJobCards";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import _ from "lodash";
import "../../../css/post-job-cards.css";
import {Spinner} from "react-bootstrap";

const Jobs = (props) => {

    const {AllPostedJobs, match, history} = props;
    const {jobType} = match.params;


    const getJobTypeText = jobType === '1' ? "Full-Time" : jobType === '2' ? "Part-Time" : "Internship";

    let jobsByJobType = AllPostedJobs ?  _.filter(AllPostedJobs, {
        "jobType": jobType
    }) : '';

    const jobsLength = jobsByJobType.length;

    const goBackPrevious = () => {
        history.goBack();
    };

    if(jobsByJobType.length) {

        return (
            <div className='container' style={{marginTop: '5em'}}>
                <h3 className='heading text-uppercase font-weight-bold text-center'>Jobs : {getJobTypeText} </h3>
                <hr className='hr-heading'/>
                <div className='container'>
                    <div className="row row-posted-job">
                        {
                            jobsByJobType && _.map(jobsByJobType, (jobByJobType) => {
                                return (
                                    <PostedJobCards jobByJobType={jobByJobType} key={jobByJobType.id} jobsLength={jobsLength} goBack={goBackPrevious}/>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }

    else {
        return (
            <div className='spinner-custom'>
                <Spinner animation="border" role="status" variant="success" >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    let AllPostedJobs = state.firestore.ordered.jobs;
    return{
        AllPostedJobs: AllPostedJobs

    }

}

export default compose(
    connect(mapStateToProps),
    firestoreConnect( [
        {
            collection: 'jobs',
            orderBy: ["date", "desc"]

        }
    ]))(Jobs);